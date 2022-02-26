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
        <link rel="stylesheet" href="style.css?202202081815" />
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
        
        <div class="dot"></div>
        <p style="padding:4px 0px; margin:1px 6px 1px 6px; line-height:21px;">
            <a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>の百人一首版です。100首の中で、<span class="under">初句(歌の一番はじめの句)がちょうど5文字であるような歌</span>を、5回以内(制限時間5分)で当てるゲームです。
        </p>
        
        <div class="dot"></div>
        <p style="padding:4px 0px; margin:1px 6px 1px 6px; line-height:21px;">
            回答するときは、百人一首の中に存在する札を<span class="under">歴史的仮名遣いで入力</span>するようにお願いします。
        </p>
                
        <div class="dot"></div>
        <p style="padding:4px 0px; margin:1px 6px 1px 6px; line-height:21px;">
            回答した歌と答えの歌を比較して、場所も音も正しいときには緑色、場所は違うけどどこかにその音があるときには黄色、どこにもその音がないときには灰色で表示されます。
        </p>
        <br>
        <div class="tile-row">
            <div class="game-tile">
                <div class="front-tile" style="background: #2cc258ab">
                    <p>ち</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile" style="background: #a3a2a287">
                    <p>は</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile" style="background: #a3a2a287">
                    <p>や</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile" style="background: #a3a2a287">
                    <p>ぶ</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile" style="background: #a3a2a287">
                    <p>る</p>
                </div>
            </div>
        </div>
        <br>
        <p style="padding:4px 0px; margin:1px 6px 1px 6px; line-height:21px;">この場合、1文字目が「ち」であることは確定で、残りの4文字はどこにも存在しないことを表します。</p>
        <br>
        
        <div class="tile-row">
            <div class="game-tile">
                <div class="front-tile" style="background: #a3a2a287">
                    <p>あ</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile" style="background: #a3a2a287">
                    <p>さ</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile" style="background: #a3a2a287">
                    <p>ぼ</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile" style="background: #ecc72294">
                    <p>ら</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile" style="background: #a3a2a287">
                    <p>け</p>
                </div>
            </div>
        </div>
        <br>
        <p style="padding:4px 0px; margin:1px 6px 1px 6px; line-height:21px;">この場合、「ら」が4文字目以外のどこかにあることを表します。</p>
        <br>
        
        <div class="tile-row">
            <div class="game-tile">
                <div class="front-tile">
                    <p>た</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile">
                    <p>き</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile">
                    <p>の</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile">
                    <p>お</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile">
                    <p>と</p>
                </div>
            </div>
        </div>
        <br>
        <p style="padding:4px 0px; margin:1px 6px 1px 6px; line-height:21px;">「たきのおとは」は初句が6文字の歌なので、このような回答はできません。</p>
        <br>
        
        <div class="tile-row">
            <div class="game-tile">
                <div class="front-tile" style="background: #a3a2a287">
                    <p>き</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile" style="background: #ecc72294">
                    <p>り</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile" style="background: #a3a2a287">
                    <p>ぎ</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile" style="background: #ecc72294">
                    <p>り</p>
                </div>
            </div>
            <div class="game-tile">
                <div class="front-tile" style="background: #a3a2a287">
                    <p>す</p>
                </div>
            </div>
        </div>
        <br>
        <p style="padding:4px 0px; margin:1px 6px 1px 6px; line-height:21px;"><span class="under">一致判定はマスごとに独立</span>で行われます。よってこの場合、「り」が2, 4文字目以外に何個存在するかという情報はわかりません。(ただし「り」が2文字含まれる札は他に存在しないので、「り」は1文字だけ含まれることになります)</p>
        
        <div class="dot"></div>
        <p style="padding:4px 0px; margin:1px 6px 1px 6px; line-height:21px;">
            <span class="under">問題の答えは0時になると1日ごとに切り替わります</span>。5回以内に正解できなくても1日に何度でも挑戦可能なので、いっぱい楽しんでください!
        </p>
            
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
                <li><a href="inquiry.php">お問い合わせ</a></li>
            </ul>
        </nav>
    </body>
</html>