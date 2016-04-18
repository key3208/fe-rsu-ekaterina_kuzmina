var a = prompt("User's name:");
window.alert(a);

function Factorial(n) {
  var fact = 1;
  for (var i = 1; i <= n; i++) {
    fact *= i;
  }
  window.alert(fact);
}
var d=prompt("Input number:");
var result=Factorial(d);