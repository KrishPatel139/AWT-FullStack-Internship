document.write("Data Types of JS:-");
var name = "idk";
var num = 17;
var flt = 73.9734;
var bool = true;
var arr1 = [17,89,34,569];
var arr2 = ["af","gdg","kj43","3947"];
{
    document.write("<br>",name);
    document.write("<br>",num);
    document.write("<br>",flt);
    document.write("<br>",bool);
    document.write("<br>",arr1);
}

document.write("<br><br>Types:-");
document.write("<br>",typeof(name));
document.write("<br>",typeof(num));
document.write("<br>",typeof(flt));
document.write("<br>",typeof(bool));
document.write("<br>",typeof(arr1));

document.write("<br><br>Printing Array elements:-");
document.write("<br>",arr1[0]);
document.write("<br>",arr1[1]);
document.write("<br>",arr1[2]);
document.write("<br>",arr1[3]);

document.write("<br><br>Functions:-");
var Func = function(){
    return "This is a function";
}
document.write("<br>",typeof(Func));
document.write("<br>",Func());

document.write("<br><br>Object:-");
var Obj = new Object();
var Obj = {
    class: "3",Rno: "17",Branch: "Sci"
}
document.write("<br>",Obj.class,"<br>",Obj.Rno,"<br>",Obj.Branch);