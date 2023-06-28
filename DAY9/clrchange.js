function BodycolorChange1(){
    document.getElementById("b").style.backgroundColor="green";
}

BodyColorChange2 =() => {
    let clr = prompt("Enter colour");
    document.getElementById("b").style.backgroundColor=clr;
}

divcolorChange1 = () => document.getElementById("d").style.backgroundColor="green";

divColorChange2 =() => {
    let clr = prompt("Enter colour");
    document.getElementById("d").style.backgroundColor=clr;
}


// Get the color picker element
const colorPicker = document.getElementById('colorPicker');

// Add an event listener to detect changes in the selected color
colorPicker.addEventListener('change', function() {
  
  const selectedColor = colorPicker.value;

  // Change the body background color
  document.style.backgroundColor = selectedColor;
});
