import * as kryptos from "./kryptos.mjs";
var input = document.getElementById('input');

console.log(kryptos.gen(5))

function writer(number) {
  document.getElementById('jsblock').innerHTML = kryptos.gen(number);
}

document.getElementById('go').addEventListener('click', () => {
  writer(input.value);
  document.getElementById('prism').remove();
  sleep(150).then(() => {
    colorize()
  });
});

function colorize() {
  var theScript = document.createElement("script");
  theScript.setAttribute("type","text/javascript");
  theScript.setAttribute("src","prism.js");
  theScript.setAttribute("id","prism");
  document.getElementsByTagName("head")[0].appendChild(theScript);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

writer(50);
colorize();