/* basic.js - JS variables teaching sample */

// 1) var: function-scoped (or globally scoped if outside function)
function testVarScope() {
    var x = 10;
    if (true) {
        var x = 20; // same variable as above
        console.log('inside if var x =', x); // 20
    }
    console.log('after if var x =', x); // 20
}

testVarScope();

// 2) let: block-scoped, best for re-assignable variables
function testLetScope() {
    let y = 10;
    if (true) {
        let y = 20; // different variable inside block
        console.log('inside if let y =', y); // 20
    }
    console.log('after if let y =', y); // 10
}

testLetScope();

// 3) const: block-scoped, cannot be re-assigned (but object contents may mutate)
function testConstScope(value) {
    const z = value;
    console.log('const z =', z);
    // z = 200; // Uncaught TypeError: Assignment to constant variable.

    const obj = { name: 'Alice', age: 25 };
    obj.age = 26; // allowed (object mutation)
    console.log('const object after mutation =', obj);
}
let value = 100;
testConstScope(value);

// 4) Basic JS types examples
const num = 123; // number
const floatNum = 45.67; // number (no separate float type in JS)
const str = 5 + 'Hello world'; // string
const bool = true; // boolean
const nothing = null; // null (explicitly no value)
let notDefined; // undefined
const bigintVal = 9007199254740991n; // bigint
const sym = Symbol('id'); // symbol
const obj = { x: 1, y: 2 }; // object
const arr = [1, 2, 3]; // object (array is object subtype)
const z = 20;
console.log('z', z, '->', typeof z);
console.log('Types:');
console.log('num', num, '->', typeof num);
console.log('floatNum', floatNum, '->', typeof floatNum);
console.log('str', str, '->', typeof str);
console.log('bool', bool, '->', typeof bool);
console.log('nothing', nothing, '->', typeof nothing); // special JS quirk is object
console.log('notDefined', notDefined, '->', typeof notDefined);
console.log('bigintVal', bigintVal, '->', typeof bigintVal);
console.log('sym', sym, '->', typeof sym);
console.log('obj', obj, '->', typeof obj);
console.log('arr', arr, '->', typeof arr);
console.log('nothing', nothing, '->', typeof nothing);

// 5) A utility function for teaching
function showType(value) {
    return `${value} (type: ${typeof value})`;
}

console.log('showType(num):', showType(num));
console.log('showType(str):', showType(str));
testConstScope(300);
