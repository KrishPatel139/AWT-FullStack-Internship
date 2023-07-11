<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "first_day19";

//create connection
$conn = mysqli_connect($servername, $username, $password, $database);

//Die if connnection was not successfull
if (!$conn){
    die("Sorry we failed to connect: ". mysqli_connect_error()."<br/>");
}
else {
    echo "Connection was successfull.<br/>";
}

//Variables to be inserted into the table
$name = "Dash";
$destination = "India";

//sql query to be executed
$sql ="INSERT INTO `php1` (`name`, `dest`) VALUES ('$name', '$destination')";
$result = mysqli_query($conn, $sql);

//check for the table creation
if($result){
    echo "The record was successfully updated!<br/>";
} else {
    echo "The record was not successfully updated because of this error -->".mysqli_error($conn);
}

?>