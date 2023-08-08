document.getElementById('btn').onclick = function(){
  let input = document.getElementById('value').value;
  document.getElementById('el').innerHTML = square(input);
}

document.getElementById('reset').onclick = function(){
  document.getElementById('el').innerHTML = '';
  document.getElementById('value').value = '';
}

function square(number){
  let res = number * number;
  return res;
}