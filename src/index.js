module.exports = function toReadable(number) {
    const single = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const binary = [
        "",
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
    const decimal = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundredth = [
        "",
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
    ];
    if (number === 0) {
        return "zero";
    } else if (number < 10) {
        return single[number];
    } else if (number < 20) {
        if (number === 10) {
            return "ten";
        }
        return binary[number - 10];
    } else if (number < 100) {
        if (number % 10 === 0) {
            return decimal[Math.floor(number / 10)];
        }
        return decimal[Math.floor(number / 10)] + " " + single[number % 10];
    } else {
        if (number % 100 === 0) {
            return hundredth[Math.floor(number / 100)];
        }
        return (
            hundredth[Math.floor(number / 100)] +
            " " +
            (number % 100 === 0 ? "" : toReadable(number % 100))
        );
    }
};
