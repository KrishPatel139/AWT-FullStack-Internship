<?php

$servername = "localhost";
$username = "root";
$password = "";

//create connection
$conn = mysqli_connect($servername, $username, $password);

//Die if connnection was not successfull
if (!$conn){
    die("Sorry we failed to connect: ". mysqli_connect_error()."<br/>");
}
else {
    echo "Connection was successfull.<br/>";
}

//Create DB
$sql = "CREATE DATABASE db1kd";
$result = mysqli_query($conn, $sql);

//check for the database creation success
if($result){
    echo "DB was created successfully!","<br/>";
}
else {
    echo "The was not created successfully because of this error ---> ". mysqli_error($conn);
}

?>