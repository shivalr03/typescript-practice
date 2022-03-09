var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var btn = document.getElementById('btn');
function add(num1, num2) {
    return num1 + num2;
}
btn.addEventListener('click', function () { return console.log(add(+num1.value, +num2.value)); });
