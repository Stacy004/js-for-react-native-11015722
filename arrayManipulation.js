function processArray(arr) {
    let result = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            result.push(num ** 2);
        } else {
            result.push(num * 3);
        }
    }
    return result;
}

function formatArrayStrings(stringsArray, numbersArray) {
    if (stringsArray.length !== numbersArray.length) {
        throw new Error("Input arrays must be of equal length.");
    }

    let formattedArray = [];
    for (let i = 0; i < stringsArray.length; i++) {
        let string = stringsArray[i];
        let number = numbersArray[i];
        if (number % 2 === 0) {
            formattedArray.push(string.toUpperCase());
        } else {
            formattedArray.push(string.toLowerCase());
        }
    }
    return formattedArray;
}

