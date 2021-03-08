var max = 40;
var min = -5;
var number = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(number);
if (number > -5 && number < 10) {
    document.write("The weather is cold");
} else if (number > 10 && number < 25) {

    document.write("The weather is moderate");
} else if (number > 25 && number < 32) {

    document.write("The weather is hot");
} else {
    document.write("The weather is very hot");

}