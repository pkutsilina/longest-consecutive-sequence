module.exports = function longestConsecutiveLength(array) {
    let hash = {};
    for (let i = 0; i < array.length; i++) {
        hash[array[i]] = true;
    }

    let maxLength = 0;
    for (let i = 0; i < array.length; i++) {
        if (!checkValueInHash(hash, array[i] - 1)) {
            let begin = array[i];
            let end = array[i] + 1;
            while (checkValueInHash(hash, end)) {
                end++;
            }
            if (maxLength < end - begin) {
                maxLength = end - begin;
            }
        }
    }
    return maxLength;
};

function checkValueInHash(hash, value) {
    return hash[value] === true;
}
