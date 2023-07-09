<?php

$arr = array("A"=>"first", "B"=>"second", "C"=>"third");

//Accessing associative array through looping
echo "Alphabets and their positions...","<br/><br/>";
foreach ($arr as $key => $value) {
    echo "$key --> $value character in alphabets.","<br/>";
}


?>