const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const minus = document.getElementById('minus');
const dot = document.getElementById('dot');
const plus = document.getElementById('plus');
const times = document.getElementById('times');
const slash = document.getElementById('slash');

const input = document.getElementById('inputRead');

one.addEventListener('click', () => {
    input.value += '1';
});

two.addEventListener('click', () => {
    input.value += '2';
});

three.addEventListener('click', () => {
    input.value += '3';
});

four.addEventListener('click', () => {
    input.value += '4';
});

five.addEventListener('click', () => {
    input.value += '5';
});

six.addEventListener('click', () => {
    input.value += '6';
});

seven.addEventListener('click', () => {
    input.value += '7';
});

eight.addEventListener('click', () => {
    input.value += '8';
});

nine.addEventListener('click', () => {
    input.value += '9';
});

zero.addEventListener('click', () => {
    input.value += '0';
});

plus.addEventListener('click', () => {
    input.value += '+';
});

minus.addEventListener('click', () => {
    input.value += '-';
});

slash.addEventListener('click', () => {
    input.value += '/';
});

dot.addEventListener('click', () => {
    input.value += '.';
});

times.addEventListener('click', () => {
    input.value += '*';
});

function clr(){
    input.value = "";
}

const equal = document.getElementById('equal');

// equal.addEventListener('click', () => {
//     input.value += "equal";
// })

function evall(){
    input.value = eval(input.value);
}


