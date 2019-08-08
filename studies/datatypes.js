


/* DATATYPES
    * Datatypes are a type of value in Javascript.  They can be primitive or complex.
    *
    * Types of data used in JavaScript:
    * number
    * string
    * boolean
    * Array
    * Object
    * Function
    * undefined
    * null
    * NaN
*/

// 1. numbers
    var wholeNumber = 56 // This is a number, a numerical value. The main thing we do with numbers is arithmetic, meaning they can be added, subtracted, divided and multiplied. //
    var fractionalNumber = 56.24   // Fractional numbers are written using a dot // 
    var exponentialNumber = 4.65e8  // Exponential numbers are written like this (equates to 4.65 * 10 to the 8th power) //
    
// 2. strings
    var string = 'Strings are used to represent text' // They are enclosed in 'single quotes', "double quotes", or `back ticks`, which act essentially the same (with a few tricks for back ticks)
/* Almost anything can be put in a string
 * Strings cannot be divided, multiplied or subtracted ... 
 * but they can be concatenated (combined) using the + operator */
    var concatenatedString = 'I ' + 'am ' + 'the ' + 'greatest!' //will print to console as 'I am the greatest!';
// `back tick strings` are called template literals and can embed other values //
    var backTickString = `Half of 100 is ${100/2}`;
    
/* 3. booleans
 * Booleans are a way for JavaScript to say "yes" or "no" using the words true and false. They act like an on/off switch.
 * Booleans are typically found in conditional statements.
 * Booleans use camparison operators to resolve to true or false:*/
    console.log(3 > 2); // prints true
    console.log(3 < 2); //false
    console.log(3 === '3'); //false
    console.log(3 == '3'); //true
    
/* 4. Arrays
 * Arrays are complex datatypes used to collect and store multiple datatypes.
 * Arrays are zero-indexed, meaning that each value within the array is assigned 
 * a numerical index that corresponds to its position in the array starting with Zero.
 * Arrays use [bracket notation] as both declaration and a method to access data within the array. 
 * Arrays can store any other data type, including numbers, strings, booleans, other arrays, objects and even functions.
 * Methods, such as .push(), .pop(), .shift() and .unshift() are used to populate arrays with data
 */
    var arr = []; // This is an empty array literal
    arr.push(true, 'hi', 26, [1,2,3]); // This method adds each item within the parentheses to the array arr, resulting in...
    arr = [true, 'hi', 26, [1,2,3]]; // The array is now populated, with true at the [0] index, 'hi' at [1], 26 at [2] and so on...
    arr[1] // Syntax used to access an item in ar array. In this example [1] is 'hi'
    
/* 5. Objects 
 * Like arrays, objects are complex datatypes that are used to collect and store 
 * multiple datatypes, including numbers, strings, booleans, other objects, arrays
 * and functions. Unlike arrays, however, values in objects are not ordered, nor
 * are they indexed. Instead, they are given key:value pairs, known as properties.
 * The key is like a label for the value stored in the object, and you can insert
 * as many properties into the object as you'd like.
 * Objects use {curly braces} to bind the properties within them.
 * Values in an object can be accessed via dot or bracket notation: */
    var objectName = {};
    objectName.keyOfObjectValue; // Accesses the value at the key 'keyOfObjectValue'
    objectName['keyOfObjectValue']; // Also accesses the value at the key 'keyOfObjectValue',
    // but notice that it is a string, because ALL KEYS ARE STRINGS. If you don't use
    // quotes in brackets, then the program will look for a variable by that name.
// Dot notation is also used to add properties to an object:
    objectName.keyOfObjectValueNew = 'Best value' // adds a property to objectName 
    // with a key of keyOfObjectValueNew and a value of 'Best value'

/* 6. Functions 
 * Functions allow programmers to encapsulate a block of code and use that code
 * whenever and as many times as they would like.
 * Functions are first declared using the function keyword followed by parentheses
 * that hold "parameters" and curly braces that contain the block of code to run: */
    function myFunc(param1, param2) {
        //Code that runs when the function is called
        return param1 + param2;
    };
/* After a function is declared, it can then be invoked, or called, using arguments
 * where the parameters exist in the declaration: */
    myFunc(1, 2); // Returns 3
    
/* 7. undefined
 * Denotes the absence of a meaningful value
 * SOME INSTANCES WHERE undefined IS RETURNED INCLUDE: 
 * A return keyword without an expression after it will return undefined.
 * Functions that lack a return statement will also return undefined.
 * If you pass fewer arguments to a function than the number of parameters 
 * it contains, the missing parameters are assigned undefined.*/
 undefined;

/* 8. null
 * Like undefined, null represents an absence of meaningful value*/
 null;
 
/* 9. NaN
 * Stands for Not a Number.
 * The only value in JavaScript that is not equal to itself, it denotes the result
 * of a meaningless computation, and therefore can't be equal to any other
 * meaningless computation.
 */
 NaN;
 
/* 10. Infinity and -Infinity 
 * Infinity is an error value that means one of two things happened: either the 
 * programmer attempted to divide a number by zero or a number can't be 
 * represented because its magnitude is too large. 
 * Infinity is useful as a default value, ie, if you're looking for a minimum or 
 * maximum.
 * Inifinity is larger than any number, with the exception of NaN, and -Inifity
 * is smaller than any number.
 */
Infinity;
-Infinity;

/* 11. What is the difference between primitive/simple and complex data types?
 * Primitive data types are numbers, strings, booleans and the two non-values, 
 * undefined and null. They are always immutable, meaning that their properties
 * cannot be changed, added or removed. 
 * Complex data types include arrays and objects, which are collections used to 
 * store other information. Unlike primitives, complex datatypes are mutable, 
 * meaning properties can be changed, added and removed. 
 
 */

/* 12. When primitive values are passed to a function, they are copied BY VALUE.
 * When complex values are passed to a function, they are copied BY REFERENCE. 
 * What does that mean, and how are they different?
 * Primitive values such as strings, numbers and booleans are the actual imutable values
 * used in the function. But complex datatypes, such as objects and arrays, only
 * use a reference to the data. Meaning that you can refer to 
 * an object or array by just a one-word variable rather than recalling all of the 
 * data held within.
 */   
 
 var animal = 'dog';
 console.log(animal); // will print 'dog' to the console
 var dog = animal;
 console.log(dog); //will print 'dog' to the console
 dog = 'fido';
 console.log(animal); // will print 'dog' to the console
 console.log(dog); //will print 'fido' to the console
 
 var numbers = [1, 2, 3, 4 , 5];
 var alsoNumbers = numbers;
 console.log(numbers, alsoNumbers); // both will print [1, 2, 3, 4, 5] to the console
 numbers.push(6);
 console.log(numbers, alsoNumbers); // both will print [1, 2, 3, 4, 5, 6] to the console
 alsoNumbers.push(7);
 console.log(numbers, alsoNumbers); // both will print [1, 2, 3, 4, 5, 6, 7] to the console 