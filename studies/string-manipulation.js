/*
 * STRING MANIPULATION
 * Strings can be manipulated two different ways: with the concatenate operator (+)
 * and with a number of useful string methods.
 * 1. With the concatenate operator: */
    'I ' + 'love ' + 'studies.'; // resolves to one string: 'I love studies.'
// 2. With string methods:
    let myVar = 'MaTt NeWmAN';
    myVar.toUpperCase(); // Results in 'MATT NEWMAN'
    myVar.toLowerCase(); // Results in 'matt newman'
    myVar.split(' '); // Splits the string on ever occurence of ' '; Results in an array: [ 'MaTt', 'NeWmAN' ]
    myVar.trim(); // Trims the whitespace; results in 'MaTtNeWmAN'
    myVar.replace('MaTt', 'Matt'); // Searches for the first argument, replaces it with the second.