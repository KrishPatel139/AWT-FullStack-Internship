<?php

$string = "Hello, World!";

// 1. strlen() - returns the length of a string
$length = strlen($string);
echo "Length of the string: " . $length . "<br>";

// 2. strtoupper() - converts a string to uppercase
$uppercase = strtoupper($string);
echo "Uppercase string: " . $uppercase . "<br>";

// 3. strtolower() - converts a string to lowercase
$lowercase = strtolower($string);
echo "Lowercase string: " . $lowercase . "<br>";

// 4. substr() - returns a substring from a string
$substring = substr($string, 0, 5);
echo "Substring: " . $substring . "<br>";

// 5. str_replace() - replaces all occurrences of a substring with another substring
$replaced = str_replace("World", "Universe", $string);
echo "Replaced string: " . $replaced . "<br>";

// 6. strpos() - finds the position of the first occurrence of a substring in a string
$position = strpos($string, ",");
echo "Position of the first comma: " . $position . "<br>";
?>
