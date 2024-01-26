function removeDuplicates() {
    const inputArrayElement = document.getElementById('inputArray');
    const inputArray = inputArrayElement.value.trim().split(',').map(item => item.trim());

    const uniqueArray = getUniqueValues(inputArray);

    const outputContainer = document.getElementById('output');
    outputContainer.textContent = `Unique Values: [${uniqueArray.join(', ')}]`;
}

function getUniqueValues(array) {
    const seen = {};
    const result = [];

    for (const value of array) {
        if (!seen[value]) {
            seen[value] = true;
            result.push(value);
        }
    }

    return result;
}
