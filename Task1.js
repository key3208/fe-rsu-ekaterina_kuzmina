"use strict";
var a = "Hello World!";
window.alert(a);
var price = 10.4;
console.log(price);

function area(a, h) {
  return 1 / 2 * a * h;
}
var S = area(3, 4);
console.log(S);

function reversefor(a) {
  for (var i = a.length-1; i>=0; i--){
    console.log(a[i]);
  }
}
var carsThree = ["Lada", "Audi", "BMW"];
reversefor(carsThree);

function reversedo(a) {
  var i = a.length-1;
  do {
    console.log(a[i]);
  }
  while (--i>=0);
}
var carsThree = ["Lada", "Audi", "BMW"];
reversedo(carsThree);

function reversewhile(a) {
  var i = a.length;
  while (--i>=0) {
    console.log(a[i]);
  }
}
var carsThree = ["Lada", "Audi", "BMW"];
reversewhile(carsThree);

var x=5;
var y = ++x;//Префиксный инкремент. Иначе: x = x + 1; var y = x
console.log(y,x);//y=6 x=6
var x1=5;
var y1 = x1++;//Постфиксный инкремент. Иначе: var y1 = x1; x1 = x1 + 1
console.log(y1,x1);//y=5 x=6

function checknum(a) {
  if (a > 0) {
      window.alert("\n Positive number");
  } else if (a < 0) {
      window.alert("\n Negative number");
  } else {
      window.alert("\n Zero");
  }
}
var t = prompt("Input number:");
checknum(t);