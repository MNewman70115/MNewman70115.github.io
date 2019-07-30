/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* NOTE: It is necessary to use camelCase when using multi-word names in JavaScript.
 * This applies to any data type(primitive or complex) or functions.
 * This means that the first word in the name is lowercase and all subsequent words are uppercase.
 * See myName and my Variable above.
 */
 
// NOTE: Variables are hoisted to their function or global scope //
 
/* NOTE: JavaScript has certain keywords which are reserved so that the interpreter can correctly interpret them.
 *Some reserved words are:
 *var, const, et, for, in, while, function, alert, eval, window, document, location, parseFloat, isNaN
 */
 
/* CONSTANTS:
 *
 * 0. Containers whose value never changes.
 * 1. They are block scoped and not hoisted to the top of their block scope.
 * 2. Constants can't be unassigned or undefined.
 */
 
const BIRTH_PLACE = 'Manhasset'; //Can't be reassigned but can be manipulated.  

/* LETS:
 *
 * 0. Containers for reassignable values
 * 1. They are not hoisted to their code block
 * 2. Allows us to declare a block scope local variable
 * 3. It can be initialized to a variable
 * 4. Used inside a block, let limits scope to that block.
 */
 
 /*console.log(availableOutsideofBlock);// prints undefined, var is hoisted to here
 console.log(availableInsideofBlock); throws error, scoped only to if block
 
 const CITY = 'New Orleans';
 if (CITY === 'New Orleans') {
     console.log(availableInsideofBlock);//prints undefined, let is hoisted to here
     
     var availableOutsideofBlock = 'foo'; 
     let availableInsideofBlock = 'bar';
 }*/
 
/* HOISTING:
 *
 * 0. Before any code is run, javascript brings every var & function declarations to the top of the file
 * 1. The var declaration loses assigned values from lower in the file
 * 2. Once you reach the var assignment, you can use that assigned value below it in the file
 * 3. The fucntion retains its body and can be called anywhere in the file
 * 4. let & const are not hoisted 
 */

 // I previously addressed hoisting involving variables in the sections for each variable
 hello('Matt'); // will print 'Hello my name is Matt.' to the console
 function hello(name) {
   console.log('Hello my name is ' + name + '.');
 }
 hello('Matt'); // will print 'Hello my name is Matt.' to the console