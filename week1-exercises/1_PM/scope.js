/**
 * Part 1:
 *    What will print and why? 
 *      A: 1, 2, and undefined will print, each on their own line. Past the function declarations, we initialize the global variable 
 *         a to 1 and print it to the console, giving us the 1. We then call function y() which initializes a local variable a to 2, printing 
 *         out the 2 instead of the 1 (since, if the program has two variables, one local and one global, it will choose the local one). We
 *         finally call the function x() within y which just declars a local variable a without instantiating it (hence, a is undefined),
 *         after which printing it to the console will yield undefined, as, again, functions will prioritize local variables over global ones.          
 *    What will change if we delete line 15? Why?
 *      A: If we delete line 15 (the declaration of local variable a within x()), the output will be 1, 2, 1. Since the function x() no 
 *         longer has a local variable with the same name as the global variable that takes priority, any call to the variable a will 
 *         default to the global variable a, which has value 1. The first two values are unaffected since nothing changed for them.
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = () => { 
  let a = 2;
  console.log(a); 
}

const y = () => {
  let a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
