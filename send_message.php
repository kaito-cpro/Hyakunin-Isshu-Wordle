<html>
<html lang="ja">
    <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-198118895-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-198118895-1');
        </script>
        <title>百人一首Wordle</title>
        <meta charset="utf-8" name="viewport"
              content="width=320,
                       height=480,
                       initial-scale=1.0,
                       minimum-scale=1.0,
                       maximum-scale=2.0,
                       user-scalable=yes" />
        <meta name="keywords" content="百人一首,Wordle,競技かるた" />
        <link rel="stylesheet" href="style.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.8/brython.js" integrity="sha256-rA89wPrTJJQFWJaZveKW8jpdmC3t5F9rRkPyBjz8G04=" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
        <script type="text/javascript" src="js/gather_data.js"></script>
        <script type="text/javascript" src="js/loading.js"></script>
    </head>
    <body onload="brython();">
        <header>
            <h1>百人一首WORDLE</h1>
        </header>
        
        <?php
            exec("export LANG=ja_JP.UTF-8");
            
            $fp = fopen("message.txt", "w");
            fwrite($fp, $_POST['val']);
            fclose($fp);

            $command="python py/send_message.py";
            exec($command,$output,$rtn);           
            foreach ($output as $o) {
                echo $o;
            }
        ?>
        
        <div id="loading" style="display:none;">
            <div class="loadingMsg"></div>
        </div>
        
        <!-- サイドメニュー -->
        <input type="checkbox" id="navTgl" class="trigger">
            <label for="navTgl" class="open"><span><div class="notification-badge-large" style="display:none"></div></span></label>
            <label for="navTgl" class="close"></label>
            <nav class="menu">
                <h2>menu</h2>
                <ul>
                    <li><a href="index.php">プレイ画面</a></li>
                    <li><a href="how_to_use.php">遊び方</a></li>
                    <li><a href="inquiry.php">お問い合わせ</a></li>
                </ul>
            </nav>
    </body>
</html>