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
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@B8_Blackash" />
        <meta name="twitter:domain" content="hyakunin-isshu-wordle.herokuapp.com" />
        <meta name="twitter:title" content="百人一首Wordle" />
        <meta name="twitter:description" content="百人一首の初句の5文字を当てるWordleです" />
        <meta name="twitter:image" content="https://drive.google.com/file/d/1N63jvw2i9f-bkBm0dO42XT5GW2bLV_DY/view?usp=sharing" />
        <meta name="keywords" content="百人一首,Wordle,競技かるた" />
        <link rel="stylesheet" href="style.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.8/brython.js" integrity="sha256-rA89wPrTJJQFWJaZveKW8jpdmC3t5F9rRkPyBjz8G04=" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
        <script type="text/javascript" src="js/main.js"></script>
        <script type="text/javascript" src="js/loading.js"></script>
    </head>
    <body onload="brython(); createGameBoard(); createKeyboard();">
        <header>
            <h1>百人一首WORDLE</h1>
        </header>
        
        <div class="game-container">
        </div>
        
        <div class="keyboard-container">
        </div>
        
        <div class="mordal" style="display: none" id="mordal">
            <p></p>
        </div>
        
        <div id="result" class="popup_wrap">
            <input type="checkbox" id="result-trigger" class="trigger">
            <div class="popup_overlay">
                <label for="result-trigger" class="popup_trigger"></label>
                <div id="result-content" class="popup_content">
                    <h1 id="result-title" style="text-align: center"></h1>
                    <a id="tweet" style="margin-left: 55%" target="_blank" rel="noopener noreferrer">結果をツイート</a>
                <label for="result-trigger" class="close_btn">×</label>
            </div>
        </div>        
        
        <br>
        <br>
        
        <!-- サイドメニュー -->
        <input type="checkbox" id="navTgl" class="trigger">
        <label for="navTgl" class="open"><span><div class="notification-badge-large" style="display:none"></div></span></label>
        <label for="navTgl" class="close"></label>
        <nav class="menu">
            <h2>menu</h2>
            <ul>
                <li><a href="index.php">プレイ画面</a></li>
                <li><a href="how_to_use.php">遊び方</a></li>
            </ul>
        </nav>
    </body>
</html>