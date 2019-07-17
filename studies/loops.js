/* 
 * LOOPS
 * Loops are built-in JavaScript features that allow programmers to execute a 
 * block of code as many times (iterations) as needed. 
 * 
 * WHILE LOOPS
 * A while loop sets the condition at the beginning that must be met before the following
 * code stops running. 
 * NOTE: While loops are more prone to infinite looping, so make sure your loop ends!*/
    let number = 0;
    while (number < 11) {
        //run this code over and over until number is 11 or greater.
        number++;
    }

/* FOR LOOPS
 * A for loop is useful when we know the exact number of times we want code to run.
 * A for loop is probably the most common form of loop. It takes a start condition,
 * a stop condition, and something that changes after each iteration (usually increment
 * or decrement).
 * Can be used to loop forward and backward.
 */
    for(var i = 0; i < 10; i++) {
        //run the code here until i = 10
        //add 1 after each iteration
    }

/* FOR-IN LOOPS
 * Used to loop over an object, this loop will pull out all of the keys in an 
 * object, one by one, allowing us to use the key to get the value in the object.
 * Note: You cannot loop backwards through a for-in loop.*/
   var object;
    for(var key in object) {
        //run code here
    }

// EXAMPLES
 // Loop any number of times, forward counting up to some limit, backward counting down to 0
    for(var j=0; j <= 10; j++) {
        console.log(i);
    } // Loops forward, counting from 0 to 10. Will print all numbers 0-10
    
    for (var j = 10; j > -1; j--) {
        console.log(i);
    } // Loops backward, counting from 10 to 0. Will print numbers in descending order.
    
 // Loop over an Array, forwards and backwards //
    let array = [13, true, 'boring', 52, [16, 'Why', {name: 'Grayson'}]];
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    } // Loops forward through the array
    
    for (var i = array.length -1; i > -1; i--) {
        console.log(array[i]);
    } // Loops backward through the array
    
 // Loop over an Object
    var fakePerson = {name: 'Swedish Chef', nationality: 'Swedish', job: 'chef'};
    for (var key in fakePerson) {
        console.log(fakePerson[key]);
    } // Loops through the object and prints each value associated with each key.