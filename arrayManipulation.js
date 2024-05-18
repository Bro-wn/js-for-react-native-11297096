function processArray(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
    const number = array[i];

    if (number % 2 === 0) {
        newArray.push(number * 2);
    } else {
        newArray.push(number * 3);
    }
    }

    return newArray;
    }

    function modifyStrings(strings, numbers) {
        for (let i = 0; i < strings.length; i++) {
        const string = strings[i];
        const number = numbers[i];

        if (number % 2 === 0) {
            strings[i] = string.toUpperCase();
        } else {
            strings[i] = string.toLowerCase();
        }
        }
        }