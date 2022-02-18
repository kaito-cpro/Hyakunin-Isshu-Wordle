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
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@B8_Blackash" />
        <meta name="twitter:domain" content="hyakunin-isshu-wordle.herokuapp.com" />
        <meta name="twitter:title" content="百人一首Wordle" />
        <meta name="twitter:description" content="百人一首の初句の5文字を当てるWordleです" />
        <meta name="twitter:image" content="https://pbs.twimg.com/media/FLvr1K2aQAEq-ci?format=png" />
        <meta name="keywords" content="百人一首,Wordle,競技かるた" />
        <link rel="stylesheet" href="style.css?202202170759" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.8/brython.js" integrity="sha256-rA89wPrTJJQFWJaZveKW8jpdmC3t5F9rRkPyBjz8G04=" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
        <script type="text/javascript" src="js/main.js?202202170810"></script>
        <script type="text/javascript" src="js/loading.js"></script>
    </head>
    <body onload="brython(); createGameBoard(); createKeyboard(); showHowToUse(); showPopup();">
        <header>
            <h1>百人一首WORDLE</h1>
        </header>
        
        <div class="timer-container">
            <p id="timer">05:00</p>
        </div>
        
        <div class="game-container">
        </div>
        
        <div class="keyboard-container">
        </div>
                     
        <div class="mordal" style="display: none" id="mordal">
            <p></p>
        </div>
        
        <div id="popup-how-to-use" class="popup_wrap">
            <input type="checkbox" id="popup-how-to-use-trigger" class="trigger" onclick="document.getElementById('popup-how-to-use-display-question-trigger').checked='checked'">
            <div class="popup_overlay">
                <label for="popup-how-to-use-trigger" class="popup_trigger"></label>
                <div id="popup-how-to-use-content" class="popup_content" style="width: 95%; max-width: 800px; height: 95%;">
                    <h1 style="text-align: center; margin-bottom: 8px;">遊び方</h1>
                        <p><span class="under">初句が5文字である百人一首の札</span>を、5回以内(制限時間5分)で当てるゲームです。</p>
                        <p>回答するときは、百人一首に存在する札を<span class="under">歴史的仮名遣いで入力</span>してください。</p>
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
                        <p>この場合、1文字目が「ち」であることは確定で、残りの4文字はどこにも存在しないことを表します。</p>
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
                        <p>この場合、「ら」が4文字目以外のどこかにあることを表します。</p>
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
                        <p>「たきのおとは」は初句が6文字の歌なので、このような回答はできません。</p>
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
                        <p><span class="under">一致判定はマスごとに独立</span>で行われます。よってこの場合、「り」が2, 4文字目以外に何個存在するかという情報はわかりません。(ただし「り」が2文字含まれる札は他に存在しないので、「り」は1文字だけ含まれることになります)</p>
                        <br>
                        
                        <p>問題は毎日0時に切り替わります。失敗しても1日に何度でもチャレンジできるので、ぜひ楽しんでください！</p>
                        <br>
                    <label for="popup-how-to-use-trigger" class="close_btn">×</label>
                </div>
            </div>        
        </div>
        
        <div id="popup-how-to-use-display-question" class="popup_wrap">
            <input type="checkbox" id="popup-how-to-use-display-question-trigger" class="trigger">
            <div class="popup_overlay">
                <label for="popup-how-to-use-display-question-trigger" class="popup_trigger"></label>
                <div id="popup-how-to-use-display-question-content" class="popup_content" style="width: 320px; height: 150px;">
                    <br>
                    <p>「遊び方」を今後も表示しますか？</p>
                    <br>
                    <table style="margin: auto;">
                        <tr>
                        <td>
                            <div class="btn-area">
                                <input type="button" value="表示する" onclick="document.getElementById('popup-how-to-use-display-question-trigger').checked='';">
                            </div>
                        </td>
                        <td>
                            <div class="btn-area">
                                <input type="button" value="表示しない" onclick="writeCookie('show_how_to_use', '0'); document.getElementById('popup-how-to-use-display-question-trigger').checked='';">
                            </div>
                        </td>
                        </tr>
                    </table> 
                    <br>                   
                    <!-- <label for="popup-how-to-use-display-question-trigger" class="close_btn">×</label> -->
                </div>
            </div>        
        </div>
        
        <div id="result" class="popup_wrap">
            <input type="checkbox" id="result-trigger" class="trigger">
            <div class="popup_overlay">
                <label for="result-trigger" class="popup_trigger"></label>
                <div id="result-content" class="popup_content">
                    <h1 id="result-title" style="text-align: center"></h1>
                    <a id="tweet" style="margin-left: 55%" target="_blank" rel="noopener noreferrer">結果をツイート</a>
                    <br>
                    <label for="result-trigger" class="close_btn">×</label>
                </div>
            </div>        
        </div>        
        
        <div id="popup1" class="popup_wrap">    
            <input type="checkbox" id="popup1-trigger" class="trigger">
            <div class="popup_overlay">
                <label for="popup1-trigger" class="popup_trigger"></label>
                <div id="popup1-content" class="popup_content">
                    <h1 style="text-align: center; margin-bottom: 8px;">アップデート通知</h1>
                    <p>難易度調整のため、以下のアップデートを行いました。</p>
                    <br>
                    <p>・制限時間を5分に設定</p>
                    <p>・回答を5回までに制限</p>
                    <br>
                    <p>今後とも百人一首Wordleをよろしくお願いいたします。</p>
                    <label for="popup1-trigger" class="close_btn">×</label>
                </div>
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