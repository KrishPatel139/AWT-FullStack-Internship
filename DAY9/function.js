function Sum(n1, n2){
    return n1+n2;
}
console.log(Sum(34,987));
document.write("<br/>"+Sum(34,987));

Sum2 = (n1, n2) => n1+n2;

console.log(Sum2(4,5));
document.write("<br/>"+Sum2(4,5));

const squar = function(n){
    return n*n;
}
console.log(squar(7));
document.write("<br/>"+squar(7));



//arrow function
const a = ["Hydrogen", "Helium", "Lithium", "Oxygen"];

const a2 = a.map(function(s) {
    return s.length;
});

console.log("Normal way ", a2);
document.write("<br/>"+"Normal way ", a2);

const a3 = a.map((s) => s.length);

console.log("Arrow way ", a3);
document.write("<br/>"+"Arrow way ", a3);

//functin hoisting
console.log(square(5));
document.write("<br/>"+square(5));
function square(n) {
    return n*n;
}