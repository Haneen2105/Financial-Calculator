function add() {
  var first = document.querySelector('.first').value;
  var second = document.querySelector('.second').value;
  var third = document.querySelector('.third').value;
  var forth = document.querySelector('.forth').value;
  var total = document.querySelector('.math')
  var total2 = document.querySelector('.math2')
  var sum1=(first/1.1)+(second/1.1)+(third/1.1)+(forth/1.1)
  var res = sum1*1.1
  var sum2=(first/1.2)+(second/1.2)+(third/1.2)+(forth/1.2)
  var res2 = sum2*1.2
  
  total.innerHTML = res*1.1
  total2.innerHTML = res2*1.2
  
}

