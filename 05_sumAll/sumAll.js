const sumAll = function(num1, num2) {
    anyNonNumber = (typeof(num1) !== "number" && !isNaN(num1)) || 
        typeof(num2) !== "number" && !isNaN(num2);
    anyNegativeNumber = num1 < 0 || num2 < 0;
    anyNonIntegerNumber = Math.floor(num1) !== num1 || Math.floor(num2) !== num2;
    if (anyNegativeNumber || anyNonIntegerNumber || anyNonNumber) {
        return "ERROR";
    };
    let sum = 0;
    let from = Math.min(num1, num2);
    let to = Math.max(num1, num2);
    while (from <= to) {
        sum += from;
        from++;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
