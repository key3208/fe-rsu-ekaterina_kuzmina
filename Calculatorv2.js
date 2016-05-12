function CalculatorV2(leftOperand) {
    "use strict";
    var res = leftOperand;
    this.multiply = function (number) {
        res = res * number;
        return this;
    };
    this.add = function (number) {
        res = res + number;
        return res;
    };
}

var calcV2 = new CalculatorV2(12);
alert(calcV2.multiply(2).add(3)); // 27
