document.write("<br>", Number("4.579"));
document.write("<br>", Number(""));
document.write("<br>", Number(" "));
document.write("<br>", Number("99 diamonds"));


//to Exponential 
let num = 3.14;
document.write("<br>", num.toExponential());
document.write("<br>", num.toExponential(2));
document.write("<br>", num.toExponential(4));
document.write("<br>", num.toExponential(7));

//fixed
document.write("<br>", num.toFixed());
document.write("<br>", num.toFixed(2));
document.write("<br>", num.toFixed(4));
document.write("<br>", num.toFixed(7));

//to Precision
document.write("<br>", num.toPrecision());
document.write("<br>", num.toPrecision(3));
document.write("<br>", num.toPrecision(5));
document.write("<br>", num.toPrecision(8));

//max, min, +ve infinity, -ve infinity
document.write("<br>"+Number.MAX_VALUE);
document.write("<br>"+Number.MIN_VALUE);
document.write("<br>"+Number.POSITIVE_INFINITY);
document.write("<br>"+Number.NEGATIVE_INFINITY);

//pasreint
document.write("<br>"+parseInt("34"));
document.write("<br>"+parseInt("34.3423"));
document.write("<br>"+parseInt("34se"));
document.write("<br>"+parseInt("ADG"));
document.write("<br>"+parseInt("34.se"));

//parseFloat
document.write("<br>"+parseFloat("34"));
document.write("<br>"+parseFloat("34.3423"));
document.write("<br>"+parseFloat("34se"));
document.write("<br>"+parseFloat("ADG"));
document.write("<br>"+parseFloat("34.se"));

//Date
document.write("<br/>"+new Date());
document.write("<br/>"+new Date("2045-05-03"));
document.write("<br/>"+new Date(2030, 23, 12, 10, 33, 30, 0));
document.write("<br/>"+new Date("December 13, 2019 12:34:06"));

var d = new Date();
document.write("<br/>"+d.toString());
document.write("<br/>"+d.toUTCString());
document.write("<br/>"+d.toDateString());
document.write("<br/>"+d.toISOString());

document.write("<br/>"+d.getTime());
document.write("<br/>"+d.getDate());
document.write("<br/>"+d.getDay());
document.write("<br/>"+d.getFullYear());
document.write("<br/>"+d.getHours());
document.write("<br/>"+d.getMonth());


document.write("<br/>"+d.getDay()+"/"+d.getMonth()+"/"+d.getFullYear());