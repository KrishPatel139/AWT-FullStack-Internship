<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP variable scope</title>
</head>
<body>
<?php
//local
function f1(){
    $x = 10;
    echo "Variable inside the function is $x";
}
f1();
echo "<br/>";

//static scope
function f3()
{
    static $z = 4;
    echo $z;
    $z++;
    echo "&nbsp;$z";
}
f3();
echo "<br/>";


// global scope
$y = 5;
function f2() {
  echo "<p>Variable inside function is: $y</p>";
}
f2();
echo "<p>Variable outside function is: $y</p>";






?>
</body>
</html>