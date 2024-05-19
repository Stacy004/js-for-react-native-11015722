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

