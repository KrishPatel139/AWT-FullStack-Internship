function funct1()
{
    // $(element name).action()
    // JS alternative:-
    // document.getElementByTagName(element name);
    // $("div").css("background-color" , "red");
    // $("#p1").css("font-style" , "italic");

    //JQuery needs ID to be unique
    // can't change css property of same id
    // alternative way is to use class selectors
    // $(".para").css("font-style" , "italic");
    // $("#div2,li").css("background-color","yellow");



    $("#div1").css("background-color" , "green");

    $("#div2").css("background-color","red");

    $("#div3").css("background-color","gray");

    // $("li:odd").fadeToggle();

    // $("li:even").fadeToggle();

    // $("div > p").fadeToggle();

    // $("p:second").fadeToggle();

    // $("div  p").fadeToggle();
}