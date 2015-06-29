// SpiderMonkey - Mozilla's js engine written in c/c++

// --------
// basics
// --------

// js vars are global by default
// if used without declared, treated as global var

// Math library
Math.abs()
Math.sqrt()

Number.prototype.toFixed(n);
// converts num to string, keeping only n decimals
var num = 5.56789;
console.log(num.toFized(2));    // 5.57   

// switch statement
// case condition can be of any type unlike other languages like C++ (where only integer is permitted)
switch(condition) {
  case "2":
    console.log
  default:
    break;
}

// js has a function scope not block scope (i. e. C++)