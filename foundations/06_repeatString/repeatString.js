const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    else if (num === 0) return "";
    else if (num === 1) return string;
    const iteration = string;
    for (let i = 2; i <= num; i++) {
        string = string + iteration;
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
