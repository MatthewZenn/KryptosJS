import * as kryptos from "./kryptos.js";
var input = document.getElementById('input');

console.log(kryptos.gen(5))

function writer(number) {
  document.getElementById('jsblock').innerHTML = kryptos.gen(number);
}

document.getElementById('go').addEventListener('click', () => {
  writer(input.value);
});

writer(30);