const removeFromArray = function(array) {
    numbersToRemove = Array.prototype.slice.call(arguments, 1);
    filteredArray = array.filter(x => !numbersToRemove.includes(x));
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
