<?php

$servername = "localhost";
$username = "root";
$password = "";

//create connection
$conn = mysqli_connect($servername, $username, $password);

//Die if connnection was not successfull
if (!$conn){
    die("Sorry we failed to connect: ". mysqli_connect_error());
}
else {
    echo "Connection was successfull";
}


?>