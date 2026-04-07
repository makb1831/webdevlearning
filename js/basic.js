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
p = false;
x = 6;
px = 6;
c = (x===px);
console.log('p == x:', c)
for(let i=0; i<5; i++) {
    console.log('i =', i);
}
while (x > 0) {
    console.log('x =', x);
    x--;
    console.log('x after decrement =', x);
}
do {
    console.log('x in do-while =', x);
} while (x > 0);
f = 0;
a = 1;
switch(f+a+6){
    case 0:
        console.log('f is zero');
        break;
    case 1:
        console.log('f is one');
        break;
    case '7':
        console.log('f is seven');
        break;
    default:
        console.log('f is something else');
}

for(let i=0; i<5; i++) {
    if(i === 3) {
        console.log('Breaking loop at i =', i);
        continue; // skip the rest of this iteration and continue with next
    }
    if(i % 2 === 0) {
        console.log('even i =', i);
    } else {
        console.log('odd i =', i);
    }
    
}
for(let i=0; i<5; i++) {
    x = 'a';
    switch(x) {
        case 'a':
            console.log('x is a');
        case 0:
        case 2:
        case 4:
            console.log('even i =', i);
            break;
        case 1:
        case 3:
            console.log('odd i =', i);
            break;
        default:
            console.log('x is something else');
    }
}
a=1;
if(a==1) {
    console.log('Monday');
}
else if(a==2) {
    console.log('Tuesday');
}
else if(a==3) {
    console.log('Wednesday');
}
else if(a==4) {
    console.log('Thursday');
}
else if(a==5) {
    console.log('Friday');
}
else if(a==6) {
    console.log('Saturday');
}
else if(a==7) {
    console.log('Sunday');
}
switch(a) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
    case 3:
        console.log('Wednesday');
        break;
    default:
        console.log('Other day');
}
if(a==1 || a==2){
    console.log('Week starting days');
} else if(a==3 || a==4 || a==5) {
    console.log('Week middle days');
} else if(a==6 || a==7) {
    console.log('Weekend days');
} else {
    console.log('Invalid day');
}
if(a==1){
    console.log('Week starting day');
} else if(a==2){
    console.log('Week starting day');
} else if(a==3) {
    console.log('Week middle day');
} else if(a==4) {
    console.log('Week middle day');
} else if(a==5) {
    console.log('Week middle day');
} else if(a==6) {
    console.log('Weekend day');
} else if(a==7) {
    console.log('Weekend day');
} else {
    console.log('Invalid day');
}
switch(a) {
    case 1:
    case 2:
        console.log('Week starting days');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Week middle days');
        break;
    case 6:
    case 7:
        console.log('Weekend days');
        break;
    default:
        console.log('Invalid day');
}
a=4;
x=2;
if(a>=1 && a<=7) {
   if(a>1){
    x++;
    if(a>2){
        x++;
        if(a>3){
            x++;
            if(a>4){
                x++;
                if(a>5){
                    x++;
                    if(a>6){
                        console.log('nested Weekend day');
                    } else {
                        x++;
                        console.log('nested Week middle day');
                    }
                } else {
                    console.log('nested Week middle day');
                }
            } else {
                console.log('nested Week middle day');
            }
        } else {
            console.log('nested Week starting day');
        }
    } else {
        console.log('nested Week starting day');
    }

   } else {
       console.log('nested Week starting day');
   }
}
console.log(x);
b=2;
if(b>=1){
    if(b>1){
        if(b==2){
            console.log('b is equal to 2');
        }
    } 
    if(b%2==0){
        console.log('b is even');
    }
}
p = 'ali';
t = 'khan';
p += t;
console.log(p);
function add(a, b) {
    return a + b;
}
c = add(5, 10);
console.log('c =', c);