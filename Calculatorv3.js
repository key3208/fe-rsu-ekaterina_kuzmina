function CalculatorV3(leftOperand) {
    "use strict";
    this.getOperand = function () {
        return leftOperand;
    };

  //Multiply
    this.multiply = function () {
        var res = [];
        var i;
        res.push(leftOperand);
        for (i = 0; i < arguments.length; i += 1) {
            res.push(arguments[i]);
        }
        return res.reduce(function (a, b) {
            return a * b;
        });
    };

  //Add
    this.add = function () {
        var res = [];
        var i;
        res.push(leftOperand);
        for (i = 0; i < arguments.length; i += 1) {
            res.push(arguments[i]);
        }
        return res.reduce(function (a, b) {
            return a + b;
        });
    };
  //Subtract
    this.subtract = function () {
        var res = [];
        var i;
        res.push(leftOperand);
        for (i = 0; i < arguments.length; i += 1) {
            res.push(arguments[i]);
        }
        return res.reduce(function (a, b) {
            return a - b;
        });
    };
  //Divide
    this.divide = function () {
        var res = [];
        var i;
        res.push(leftOperand);
        for (i = 0; i < arguments.length; i += 1) {
            res.push(arguments[i]);
        }
        return res.reduce(function (a, b) {
            return a / b;
        });
    };
}


var calcV3 = new CalculatorV3(12);
console.log(calcV3.multiply(2, 2, 4, 5));
console.log(calcV3.add(3, 1, 2));
console.log(calcV3.subtract(1, 4, 2, 1));
console.log(calcV3.divide(2, 6));