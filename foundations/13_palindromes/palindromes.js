const palindromes = function (string) {
    clearedString = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
    .toLowerCase()
    .replaceAll(" ","");
    if (clearedString.length === 0 || clearedString.lenght === 1) return true;
    for(let i = 0, j = clearedString.length - 1; i < clearedString.length; i++, j--) {
        if (clearedString.charAt(i) != clearedString.charAt(j)) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
