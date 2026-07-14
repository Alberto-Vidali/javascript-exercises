const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    }
    else if (a < 0 || b < 0) {
        return "ERROR";
    }
    else if (a % 1 != 0 || b % 1 != 0) {
        return "ERROR";
    }

    let sum = 0

    if (a <= b) {
        for(let i = a; i <= b; i++) {
            sum += i;
        }
    }
    else {
        for(let i = b; i <=a; i++) {
            sum += i
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
