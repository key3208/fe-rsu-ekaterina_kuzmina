function CalculatorV1(leftOperand) {
    "use strict";
    this.getOperand = function () {
        return leftOperand;
    };
    this.multiply = function (number) {
        return leftOperand * number;
    };
    this.add = function (number) {
        return leftOperand + number;
    };
    this.subtract = function (number) {
        return leftOperand - number;
    };
    this.divide = function (number) {
        return leftOperand / number;
    };
}

var calcV1 = new CalculatorV1(12);
console.log(calcV1.multiply(2)); //24
console.log(calcV1.add(3)); //15
console.log(calcV1.subtract(1)); //11
console.log(calcV1.divide(2)); //6