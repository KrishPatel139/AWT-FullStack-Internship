<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET Example php</title>
</head>
<body>
    <body>
        <form action="<?php $_PHP_SELF?>" method="get">
            <fieldset>
            <label for="name">Name: </label>
            <input type="text" id="name" name="name">
            <br><br/>
            <label for="email">Email: </label>
            <input type="email" id="email" name="email">
            <br/><br/>
            <input type="submit" value="Submit">
            </fieldset>
        </form>
    </body>
</body>
</html>
<?php

if(isset($_GET['name']) && isset($_GET['email'])){
    $name = $_GET['name'];
    $email = $_GET['email'];

    echo "Name: ", $name, "<br/>";
    echo "Email: ", $email, "<br/>";
} else {
    echo "No information provided...";
}

?>