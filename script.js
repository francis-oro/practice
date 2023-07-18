// add 7 to a number
function add7(number) {
    return number + 7
};

// multiply two numbers
function multiply(a,b) {
    return a * b
};

// capitalize only first letter of string
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
};

// return last letter of string
function lastLetter(string) {
    return string.slice(-1)
};

// Repeat string a certain number of times
const repeatString = function(input, repeatNumber) {
    let i = input;
    let r = repeatNumber;
    if (r < 0) {
        return 'ERROR'}
else

    return input.repeat(repeatNumber)
};

// Reverse a string
const reverseString = function(input) {
    let splitInput = input.split('');
    let wordLength = splitInput.length;
    let newWord = ''
    for (i = wordLength - 1; i >= 0; i--) {
        
        newWord += splitInput[i]
    }
    return newWord
};

// Remove value from an array
const removeFromArray = function(array, removedValue) {
    for (i = 1; i <= arguments.length; i++) {
        let removed = arguments[i]
        let arrayLength = array.length
        if (typeof removed !== typeof arguments[i]) {
            continue
        }
        else
        for (j = 0; j < arrayLength; j++)
            if (array[j] === removed) {
            array.splice(j, 1)
            }
    };  return array
};

// Sum all numbers between two numbers
const sumAll = function(first, last) {
    if (first < 0 || last < 0) {return 'ERROR'};
    if (typeof first !== 'number') {return 'ERROR'};
    if (typeof last !== 'number') {return 'ERROR'};
    let total;
    if (first < last){
        let total = first;
        for (i = first + 1; i <= last; i++) {
            let output = (total += i)
        }
        return total
    }
    else if (last < first) {
        let total = last;
        for (i = last + 1; i <= first; i++) {
            let output = (total += i)
        }
        return total
    }
};

// Determine if a year is a leap year
const leapYears = function(year) {
    if (year % 400 == 0) {
        return true
    }
    else if ((year % 100 !== 0) && (year % 4 == 0)) {
        return true
    }
    else return false
};

// Convert Fahrenheit to Celsius
const convertToCelsius = function(degreeF) {
    let outputC = ((degreeF - 32) * (5 / 9))
    return Math.round(outputC * 10) / 10
}
;

// Convert Celsius to Fahrenheit
const convertToFahrenheit = function(degreeC) {
    let outputF = ((degreeC * (9 / 5)) + 32)
    return Math.round(outputF * 10) / 10
};

