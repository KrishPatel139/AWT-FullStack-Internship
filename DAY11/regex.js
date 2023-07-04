const regex = /Pain/g;
const str1 = "Feel Pain, Contemplate Pain, Accept Pain, Know Pain";
document.write(str1);
document.write("<hr/><br/>",str1.replace(regex,"Nagato"));

var regex1 = /Pain/i;
var op = regex1.exec(str1);
document.write("<hr/><br/>",op);
console.log(op);

var matchcase = regex1.test(str1);
document.write("<br/>",matchcase);

let txt = "WHAT what what what this this this 468431!!!";
let result = txt.match(/[0-9]/g);
document.write("<br/>",result);