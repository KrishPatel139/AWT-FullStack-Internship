<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Connection</title>
</head>
<body>
    <h1>Registration Page</h1>
    <form action="connect.php" method="post">
        <label for="name">Name: </label>
        <input type="text" id="name" name="name" required>
        <br><br/>
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" required>
        <br/><br/>
        <label for="phone">Phone: </label>
        <input type="tel" id="phone" name="phone" required>
        <br/><br/>
        <label for="bgroup">bgroup: </label>
        <input type="text" id="bgroup" name="bgroup" required>
        <br/><br/>
        <input type="submit" name="submit" id="submit"/>
    </form>
</body>
</html>