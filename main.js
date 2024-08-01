import * as kryptos from "./kryptos.mjs";
var input = document.getElementById('input');

console.log('What are you doing here?');

function writer(number) {
  document.getElementById('jsblock').innerHTML = kryptos.gen(number);
}

document.getElementById('copy').addEventListener('click', () => {
  selectElementText(document.getElementById("jsblock"));
  //navigator.clipboard.writeText(copyText);
});

document.getElementById('go').addEventListener('click', () => {
  if (input.value > 99) {
    input.value = 99;
  }
  else if (input.value < 1) {
    input.value = 1;
  }
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

function selectElementText(el, win) {
  win = win || window;
  var doc = win.document, sel, range;
  if (win.getSelection && doc.createRange) {
      sel = win.getSelection();
      range = doc.createRange();
      range.selectNodeContents(el);
      sel.removeAllRanges();
      sel.addRange(range);
  } 
  else if (doc.body.createTextRange) {
      range = doc.body.createTextRange();
      range.moveToElementText(el);
      range.select();
  }
}

writer(50);
colorize();