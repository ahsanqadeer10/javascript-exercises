const leapYears = function(year) {
    divisibleByFour = year % 4 === 0;
    divisibleByHundred = year % 100 === 0;
    divisibleByFourHundred = year % 400 === 0;

    return divisibleByFour && (!divisibleByHundred || divisibleByFourHundred);
};

// Do not edit below this line
module.exports = leapYears;
