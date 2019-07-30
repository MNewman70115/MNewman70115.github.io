/* FUNCTIONS
 * Functions allow us to encapsuplate a block of code and use it whenever and how
 * often as we'd like.
 *
 * PHASE ONE: A function is first *declared* using the function keyword, followed by an 
 * optional function name and a set of parentheses. 
 * Within these parentheses, we can optionally include parameters that the function will take 
 * and use within its code block as arguments when the function is called.*/
     // NOTE: A function can take an unlimited number of parameters

 // Function without parameters:
    function myFunc() {
        console.log('This function has no parameters'); // code that runs when the function is called
    } 
    
    myFunc(); // Because there are no parameters in the function declaration, we similarly will not have any arguments when the function is called and it will print 'This function has no paramters' to the console.

 // Function with parameters:
    function myFunc2(param1, param2) {
        console.log(param1 + param2); 
    }
    
    myFunc2(3, 7); // Function is called with 2 arguments in place of the parameters param1 and param2 that were set in the function declaration. It will print 10 to the console.

/* Note that the above examples do not include return statements. That's because,
 * much like parameters are optional, so too are return statements. If a function
 * does not include a return statement it is resolving to a side effect -- in this instance,
 * the side effect is what is printed to the console. If, however, we were to 
 * replace console.log with return, the function will resolve to that return statement. */ 
 
 // Function with a return statement:
    function myFunc3(param1, param2) {
        return param1 + param2; 
    }
    
    myFunc3(3, 7); // This function resolves to the return statement, which itself resolves to 10.
    
/* 
 * PHASE TWO: After a function is declared, we can then *exectute*, *invoke* or *call*
 * the function. If the function declaration includes parameters, then the invocation
 * of the function uses *arguments* in their place when the function is called.*/
    myFunc(1,4); // Logs 5 to the console (1 and 4 are the *arguments* that take the place of the *parameters*)
// We can assign a function to a variable the same way as we assign any other datatype:
    let mattRules = function newFunc() {
        return 'I am amazing!';
    };
/*
 * Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
 * For example: */
    var address = '1075 Quentin Pl';
    function myFunc4(nameFirst, nameLast) {
        let result = nameFirst + ' ' + nameLast + 'lives at ' + address; // address is accessible here because children can access parents
        return result; // result is accessible here becuase it is scoped to the code block
    }
    //return result; // result is not accessible here because parents cannot access children
    //return address; // address is accessible because it was declared globally, outside of the function
    
 /* Closures: Functions form closures around the data they house. 
 If an object returned from the Function and is held in memory somewhere (referenced), 
 that closure stays ALIVE, and data can continue to exist in these closures!
 */
 
    function makeMultiplier(x) {
        return function(y) {
            return x * y;
        };
    }

    var multiply5 = makeMultiplier(5);
    var multiply10 = makeMultiplier(10);

    console.log(multiply5(2));  // 10
    console.log(multiply10(2)); // 20
    
 
 