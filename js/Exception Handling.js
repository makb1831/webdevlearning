/*
Exception Handling in JavaScript — basics, in-depth, and simple examples

Overview
- JavaScript uses exceptions to represent runtime problems. You "throw" an exception
  and you "catch" it with a `try...catch` block. Exceptions are useful for:
  - unexpected runtime errors (network failures, invalid input, parse errors)
  - stopping execution when a function cannot complete correctly

Core concepts
- throw: raise an exception. Can throw any value, but `Error` instances are standard.
- try { } catch (err) { } finally { }:
  - `try`: run code that may throw
  - `catch`: handle the thrown value (parameter often named `err` or `e`)
  - `finally`: runs whether or not an exception occurred
- Error types: built-in types include `Error`, `TypeError`, `ReferenceError`,
  `RangeError`, `SyntaxError`, etc. You can create custom error classes by
  extending `Error`.

Synchronous example: safe JSON parsing and custom errors
*/

// Example 1: safe JSON parse
function safeParseJSON(jsonString) {
  try {
    // JSON.parse throws SyntaxError on invalid JSON
    const obj = JSON.parse(jsonString);
    return obj;
  } catch (err) {
    console.error('safeParseJSON: invalid JSON ->', err.message);
    // return null or rethrow depending on API contract
    return null;
  } finally {
    // optional cleanup
    // runs whether parse succeeded or threw
  }
}

console.log('parse valid:', safeParseJSON('{"x":1}'));
console.log('parse invalid:', safeParseJSON('{x:1}'));

// Example 2: throwing and catching custom errors
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new ValidationError('divide expects numbers');
  }
  if (b === 0) {
    throw new RangeError('division by zero');
  }
  return a / b;
}

try {
  console.log('divide 6 / 2 =', divide(6, 2));
  console.log('divide 6 / 0 =', divide(6, 0));
} catch (err) {
  // You can inspect err.name and err.message
  console.error('Caught:', err.name + ':', err.message);
}


/*
Asynchronous errors (Promises and async/await)

- Promises: errors are represented by rejected promises; handle with `.catch()`.
- async/await: use try/catch around `await` expressions to handle rejections.

Example below simulates an async operation that may fail.
*/

function fakeFetch(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!url || url.indexOf('http') !== 0) {
        reject(new Error('Invalid URL'));
      } else {
        resolve({ ok: true, json: () => Promise.resolve({ data: 'OK' }) });
      }
    }, 200);
  });
}

// Using async/await with try/catch
async function getData(url) {
  try {
    const res = await fakeFetch(url);
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('getData failed:', err.message);
    // Optionally rethrow so callers can handle the error too
    throw err;
  }
}

// call and handle rejection
getData('bad-url')
  .then((d) => console.log('data:', d))
  .catch((err) => console.log('Handled at callsite:', err.message));

getData('http://example.com')
  .then((d) => console.log('data from good url:', d))
  .catch((err) => console.log('Should not happen:', err.message));


/*
Best practices and tips
- Prefer `Error` instances (or subclasses) to preserve stack traces and names.
- Validate inputs before performing work; throw with clear, actionable messages.
- Avoid using exceptions for normal control flow — they're for exceptional cases.
- For libraries: document whether functions return error codes, null, or throw.
- For async code: always attach `.catch()` to top-level promises or use
  `try/catch` in `async` functions; unhandled promise rejections can crash
  or be missed.
- When catching, either handle fully or rethrow after adding context.

Running this file with Node.js will execute the examples and show outputs.
*/

// The module contains runnable examples above — no exports required.
