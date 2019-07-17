/* CONTROL FLOW
 * Control flow can be thought of as the structure of a story told from top to bottom.
 * It uses conditional execution, which is created using the 'if' keyword: If 
 * the condition within parentheses resolves to true, the code within the curly
 * braces will be executed. It tests for just one condition.
 * If statement syntax: 
 */
    if (3 > 2) { // This resolves to true
        //execute this code
    }
 
 /*
  * Else if: If you are testing for more than one condition, they can be chained
  * together using else if: */
    var lightSwitch = 'on';
    if (lightSwitch === 'on') {
        // execute this code
    } else if (lightSwitch === 'off') {
        // execute this code instead
    }
 
 /* 
  * Else: This acts as the default case in an if else chain. If all conditions
  * tested resolve to false, the code after the else statement will run: */
    //var lightSwitch = 'on'; lightSwitch already assigned on line 15
    if (lightSwitch === 'on') {
        // execute this code
    } else if (lightSwitch === 'off') {
        // execute this code instead
    } else {
        console.log("You're outside");
    }
 
/* 
 * Switch Statements
 * This is another way to represent an if-else chain, and it can make for cleaner code.
 * A switch statement evaluates an input expression, matches its value to a "case"
 * and then executes code associated with that case. If no cases are found to match,
 * then it runs "default" code at the end of the switch statement.
 * NOTE: A break should end each case!!! (otherwise, you will likely get a result 
 * that you don't want)
 * Switch statement syntax: */
    var color = 'blue'; // Input expression that we are evaluating
    
    switch (color) {
        case 'orange':
            console.log('It must be hot'); // We aren't looking for orange, so this code will not run.
            break; // Because the code didn't run, this break statement is skipped.
        case 'blue':
            console.log('Look at the ocean'); // This code will run because 'crimson' is what we are looking for
            break; // The code will stop here because we have found a true condition
        case 'green':
            console.log('The grass looks nice');
            break;
        default:
            console.log('Who cares about colors?');
    }