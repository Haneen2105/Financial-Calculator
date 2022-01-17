/*eslint-env browser*/

var $ = function(id) {
  "use strict";
  return window.document.getElementById(id);
};

function Brexfun() {
  "use strict";
  var userInput1 = parseInt($('input1').value, 10);
  var userInput2 = parseInt($('input2').value, 10);
  var userInput3 = parseInt($('input3').value, 10);
  var userInput4 = parseInt($('input4').value, 10);
  var sumBrex  = userInput1 + userInput2 + userInput3+ userInput4;
  var Brexper = sumBrex * 0.3;
  $('resultOutput').value = Brexper;
  return Brexper;
}
function Stripefun() {
  "use strict";
  var userInput1 = parseInt($('input1').value, 10);
  var userInput2 = parseInt($('input2').value, 10);
  var userInput3 = parseInt($('input3').value, 10);
  var userInput4 = parseInt($('input4').value, 10);
  var sumStripe   = userInput1 + userInput2 + userInput3+ userInput4;
  var Stripeper = sumStripe* 2.9;
  $('resultOutput').value = Stripeper;
  return Stripeper;
}
function Amexfun() {
  "use strict";
  var userInput1 = parseInt($('input1').value, 10);
  var userInput2 = parseInt($('input2').value, 10);
  var userInput3 = parseInt($('input3').value, 10);
  var userInput4 = parseInt($('input4').value, 10);
  var sumAmex    = userInput1 + userInput2 + userInput3+ userInput4;
  var Amexper = sumAmex * 1.3;
  $('resultOutput').value = Amexper;
  return Amexper;
}
function unlfun() {
  "use strict";
  var userInput1 = parseInt($('input1').value, 10);
  var userInput2 = parseInt($('input2').value, 10);
  var userInput3 = parseInt($('input3').value, 10);
  var userInput4 = parseInt($('input4').value, 10);
  var tsum    = userInput1 + userInput2 + userInput3+ userInput4;
  var sumper = tsum * 1.1;
  $('resultOutput1').value = sumper;
  return sumper;
}
function liffun() {
  "use strict";
  var userInput1 = parseInt($('input1').value, 10);
  var userInput2 = parseInt($('input2').value, 10);
  var userInput3 = parseInt($('input3').value, 10);
  var userInput4 = parseInt($('input4').value, 10);
  var lsum    = userInput1 + userInput2 + userInput3+ userInput4;
  var lper = lsum * 1.2;
  $('resultOutput2').value = lper;
  return lper;
}



//Event Handler Function
function init() {
  "use strict";
  $('Brex').addEventListener('click', Brexfun);
  $('Stripe').addEventListener('click', Stripefun);
  $('Amex').addEventListener('click', Amexfun);
  $('Brex').addEventListener('click', unlfun);
  $('Stripe').addEventListener('click', unlfun);
  $('Amex').addEventListener('click', unlfun);
  $('Brex').addEventListener('click', liffun);
  $('Stripe').addEventListener('click', liffun);
  $('Amex').addEventListener('click', liffun);
  

}
window.addEventListener('load', init);