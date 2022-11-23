<?php
//var_dump($_COOKIE);

// Проверка наличия $_COOKIE.
// Если в куке не существует email или он равен пустой строке, то перенаправляем на index.html
if (!isset($_COOKIE['email']) or trim($_COOKIE['email']) == '') {
    header("Location: index.html");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
<h1>User Page</h1>
<button id="logout">LogOUT</button>
<script src="script/logout.js"></script>
</body>

</html>