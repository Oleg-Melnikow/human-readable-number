module.exports = function toReadable(number) {
    const arrayNum = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const decArray = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const result = [];

    const convertDec = (value) => {
        for (let i = 0; value > 0; ++i) {
            const num = value % 10;
            value = Math.trunc(value / 10);
            if (i >= 1) {
                result.unshift(decArray[num - 2]);
            } else {
                if (num > 0) {
                    result.unshift(arrayNum[num]);
                }
            }
        }
    }

    if (number <= 19) result.unshift(arrayNum[number]);

    if (number >= 20 && number < 100) convertDec(number);

    if (number >= 100) {
        const hundred = Math.trunc(number / 100);
        let dec = number % 100;
        if (dec) {
            if (dec <= 19) result.unshift(arrayNum[dec]);
            if (dec >= 20 && dec < 100) convertDec(dec);
        }
        result.unshift(`${arrayNum[hundred]} hundred`);
    }

    return result.join(' ');
};
