// Link this js file with any html file with just its boilerplate code.

document.write("While loop");
let i = 0;
while (i<7) {
    document.write("<br>",i);
    i++;
}

document.write("<br><br>Do While loop");
let j = 0;
do {
    document.write("<br>",j);
    j++;
}
while(j<8)

document.write("<br><br>For loop");
var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
for (let k = 0; k < days.length; k++) {
    var element = days[k];
    document.write("<br>",element);
}

document.write("<br><br>For in loop");
var numbers = [45, 4, 9, 16, 25];
for (var key in numbers) {
    document.write("<br>",numbers[key]);
}

document.write("<br><br>For in loop");
var s1 = "Sunday";
for (const xy of s1) {
    document.write("<br>",xy);
}