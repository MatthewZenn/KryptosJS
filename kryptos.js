const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var string_len = 0;
var string = '';
var string2 = '';
var num = 0;
var output = '';

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

export function gen(length) {
  output = '';
  for (i=0; i<length; i++) {
    string = '';
    string2 = ''; 
    num = Math.floor(Math.random() * (50 - 0 + 1) + 0);
    string_len = Math.floor(Math.random() * (12 - 5 + 1) + 5);
    for (k=0; k<string_len; k++) {
      string += letters.random();
    }
    string_len = Math.floor(Math.random() * (12 - 5 + 1) + 5);
    for (k=0; k<string_len; k++) {
      string2 += letters.random();
    }
    let number = Math.floor(Math.random() * 6) + 1;
    switch(number) {
      case 1:
        output += "var "+string+" = "+num+";";
        break;
      case 2:
        output += "const "+string+" = "+num+";";
        break;
      case 3:
        output += "document.querySelector('"+string+"').selectionStyle('"+string2+"');";
        break;
      case 4:
        output += "document.getElementById('"+string+"').innerHTML == "+string2+";";
        break;
      case 5:
        output += "var "+string+" = Math.random();";
        break;
      case 6:
          output += "document.getElementById('"+string+"').innerHTML == '"+string2+"';";
          break;
    }
  }
}

gen(50);
console.log(output);