/* OPERATORS
 *
 * Operators act on our data. They can assign them to a variable or compare them
 * them or include them in arithmetic operations. Operators are classed by what
 * they do & how many operands are required. Operands are the values that operators
 * act on. Unary operators only work with one value, binary with two, ternary with three.
 *
 * 1. Assignment operators
 * Used to assign a value to a variable*/
    var x = 3 + 7; // the = operator assigns the value of 3 + 7 (10) to the variable x
 /* NOTE: Equations to the right of the assignment operator are resolved before 
  * the value is assigned.
 * There are also compound assignment operators, which reassign values based on the operator used.
    // Arithmetic // */
    let y = 3;
    y += 4; // Reassigns y to a new value: y = y + 4, or in this case, y = 3 + 4, or 7
    y -= 2; // Reassigns y again to 5 (y = 7 - 2)
    y *= 3; // Reassigns y again to 15 (y = 5 * 3)
    y /= 3; // Reassigns y again to 5 ( y = 15 / 3)
    
    // String concatenation
    let str = ''; // Starts with an empty string
    str += 'This is an '; // str reassigned to Empty string '' + 'This is an ', aka 'This is an '
    str += 'example of '; // str reassigned to 'This is an ' + 'example of ', aka 'This is an example of '
    str += 'compund string concatenation'; // Final operator reassigns the variable str to 'This is an example of compound string concatenation'
    str; // Returns 'This is an example of compound string concatenation'
    
/* 2. Arithmetic operators
 * These operators are used to perform mathematical equations with numbers.*/
    1 + 2 == 3; // Addtion (+)
    4 - 1 == 3; // Subtraction (-)
    3 * 1 == 3; // Multiplication (*)
    6 / 2 == 3; // Division (/)

/* 3. Comparison operators
 * Used to compare values, these binary operators always resolve to true or false. 
 * Comparison operators are: */
    3 > 2; // Greater than (>) true
    2 < 3; // Less than (<) true
    11 >= 10; // Greater than or Equal to (>=) true
    5 <= 5; // Less than or Equal to (<=) true
    5 == '5'; // Equal to (==) true
    6 === 6; // Strictly equal to (===) true
    4 != 5; // Not equal to (!=) true

/* 4. Logical operators
 * JavaScript supports three logical operators to denote "and" (&&), "or" (||), 
 * and "not" (!). They are used as follows:*/
    3 > 2 && 8 > 3; // true
    4 > 5 || 11 > 19; // false
    4 != 3; // true
 
/* 5. Unary operators 
 * An operator that takes only one value, unlike a binary operator, which takes two. */
    !true; // Results in false; the operator (!) denotes "not"
    typeof 4; // Results in number; typeof works on the one variable and returns its datatype.
    -5; // The (-) operator negates a given value.
    
/* 6. Ternary operator (a ? b : c)
 * While unary operators work on variable and binary work on two, ternary operators 
 * work on three variables using a question mark (?) and colon (:) 
 * The first value, which is a boolean, picks which of the other two values are returned. 
 * If true, it will return the middle value.
 * If false, it will return the value to the right of the colon.*/
    console.log(true ? 1 : 2); // prints 1
    console.log(false ? 1 : 2); // prints 2