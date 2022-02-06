<html>
<html lang="ja">
    <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-198118895-2"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-198118895-2');
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
        <script type="text/javascript" src="js/loading.js"></script>
    </head>
    <body onload="brython();">
        <header>
            <h1>百人一首WORDLE</h1>
        </header>
        
        <br>
        
        <form action="">
            <div class="inputs">
                <label class="label">百人一首Wordleの遊び方</label>
            </div>
        </form>
        
        <div class="dot"></div><p style="padding:4px 0px; margin:1px 6px 1px 6px; line-height:21px;"><a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>の百人一首版です。5回まで回答することができるので、100首の中で、初句(歌の一番はじめの句)がちょうど5文字であるような歌を当ててください。たとえば「ちはやぶる」は答えの札になり得ますが、「たきのおとは」は初句が6文字なので答えにはなり得ません。また「わたのはら」などは競技かるたでの決まり字は6字ですが、初句は5文字なので問題の答えになり得ることに注意してください。</p>
        <div class="dot"></div><p style="padding:4px 0px; margin:1px 6px 1px 6px; line-height:21px;">回答するときは「あいうえお」のような、百人一首の中に存在しない歌は回答することができません。また仮名遣いは歴史的仮名遣いで入力するようにお願いします。</p>
        <div class="dot"></div><p style="padding:4px 0px; margin:1px 6px 1px 6px; line-height:21px;">制限時間は5分です。百人一首Wordleは答えがすぐに絞れてしまうことが多いので、難易度調整のために制限時間を設けています。</p>
        <div class="dot"></div><p style="padding:4px 0px; margin:1px 6px 1px 6px; line-height:21px;">回答した歌と答えの歌を比較して、場所も音も正しいときには緑色、場所は違うけどどこかにその音があるときには黄色、どこにもその音がないときには灰色で表示されます。</p>
        <div class="dot"></div><p style="padding:4px 0px; margin:1px 6px 1px 6px; line-height:21px;">問題の答えは0時になると1日ごとに切り替わります。5回以内に正解できなくても1日に何度でも挑戦可能なので、いっぱい楽しんでください!</p>
            
        <br>
        <br>
        <input type="button" onclick="history.back()" value="戻る">
        
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
            </ul>
        </nav>
    </body>
</html>