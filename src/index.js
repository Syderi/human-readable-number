module.exports = function toReadable(number) {
    let numer09 = [
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
    let decada = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    // console.log(number);
    if (number === 0) return "zero";
    if (number < 20) return numer09[number];
    if (number <= 99)
        return (
            decada[+number.toString()[0]] + " " + numer09[+number.toString()[1]]
        ).trim();
    if (number % 100 === 0) return (numer09[+number.toString()[0]] + " hundred").trim();
    if (number <= 999 && number - +number.toString()[0] * 100 - 19 > 0)
        return (
            numer09[+number.toString()[0]] +
            " hundred" +
            " " +
            decada[+number.toString()[1]] +
            " " +
            numer09[+number.toString()[2]]
        ).trim();

    return (
        numer09[+number.toString()[0]] +
        " hundred" +
        " " +
        numer09[+number.toString().slice(-2)]
    ).trim();
};

console.log(module.exports(955));

// 'hundred '
