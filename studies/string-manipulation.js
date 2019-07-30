/*
 * STRING MANIPULATION
 * 
 * In JavaScript, strings are primitive values but are treated as objects when utilizing a method or property.  
 *
 * Strings can be manipulated two different ways: with the concatenate operator (+)
 * and with a number of useful string methods.
 * 1. With the concatenate operator: */
    var sentence = 'I ' + 'love ' + 'studies.'; // resolves to one string: 'I love studies.'
// 2. With string methods:
    let myVar = 'MaTt NeWmAN';
    myVar.length; // results 11 with 10 indexed elements 
    myVar.replace('MaTt', 'Matt'); // Searches for the first argument, replaces it with the second. results in 'Matt NeWmAN'
    myVar.toUpperCase(); // Results in 'MATT NEWMAN'
    myVar.toLowerCase(); // Results in 'matt newman'
    myVar.split(' '); // Splits the string on ever occurence of ' '; Results in an array: [ 'matt', 'newman' ]