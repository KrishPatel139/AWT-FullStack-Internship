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

//Creating a table in the db
$sql = "CREATE TABLE `php1` ( `sno` INT(6) NOT NULL AUTO_INCREMENT, `name` VARCHAR(12) NOT NULL, `dest` VARCHAR(6) NOT NULL, PRIMARY KEY (`sno`))";

$result = mysqli_query($conn, $sql);

//check for the table creation
if($result){
    echo "The table was created successfully!<br/>";
} else {
    echo "The table was not created successfully because of this error -->".mysqli_error($conn);
}

?>