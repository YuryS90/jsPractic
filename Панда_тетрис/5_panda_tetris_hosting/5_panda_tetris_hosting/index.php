<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/panda.css">
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <title>Panda Tetris</title>
</head>

<body>
    <div class="container">
        <header>
        <h1 class="text-center"><a href="/">
                Panda Tetris
                </a>
            </h1>
        </header>
        <main>
            <div class="block">
                <div class="tetris-wrap">
                    <div id="tetris-field"></div>
                </div>

                <div class="user-result">
                    <h3>Лучшие результаты</h3>
                    <?php
                    require_once 'show_result.php';
                ?>
                </div>

            </div>
            <div class="block text-field">
                <button class="start">Run</button>
                <ul class="rule">
                    <li>Нажимай start!</li>
                    <li>Управляй Left Arrow, Right Arrow</li>
                    <li>Собирай три круга в горизонтальный ряд!</li>
                    <li>Каждый ряд - 10 очков!</li>
                </ul>
                <div class="score-field text-center">0</div>

                <div class="form">

                </div>

                <h3 class="text-center">Мои курсы</h3>
                <p><a href="http://html.itgid.info" target="_blank"><img src="images/html.PNG" alt="" class="ai"></a>
                </p>
                <p><a href="http://js.itgid.info" target="_blank"><img src="images/js.PNG" alt="" class="ai"></a></a>
                </p>
                <p><a href="http://php.itgid.info" target="_blank"><img src="images/php.PNG" alt="" class="ai"></a></a>
                </p>
            </div>
        </main>
    </div>


    <script src="js/panda.js"></script>
</body>

</html>