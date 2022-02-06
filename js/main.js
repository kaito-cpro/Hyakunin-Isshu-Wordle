var MAX_TURN = 5;

var GREEN = "#2cc258ab";
var YELLOW = "#ecc72294";
var GRAY = "#a3a2a287";

var cards = ["あきかぜに", "あきのたの", "あけぬれば", "あさぢふの", "あさぼらけ", "あしびきの", "あはぢしま", "あはれとも", "あひみての", "あふことの", "あまつかぜ", "あまのはら", "あらざらむ", "あらしふく", "ありあけの", "ありまやま", "いにしへの", "いまこむと", "いまはただ", "うかりける", "うらみわび", "おくやまに", "おとにきく", "おほえやま", "おほけなく", "おもひわび", "をぐらやま", "かくとだに", "かささぎの", "かぜそよぐ",  "きみがため", "きりぎりす", "こころにも", "こぬひとを", "このたびは", "こひすてふ", "これやこの", "さびしさに", "しのぶれど", "しらつゆに", "すみのえの", "せをはやみ", "たかさごの", "たちわかれ", "たまのをよ", "たれをかも", "ちぎりきな", "ちはやぶる", "つきみれば", "つくばねの", "ながからむ", "ながらへば", "なげきつつ", "なげけとて", "なつのよは", "なにはえの", "なにはがた", "はなさそふ", "はるすぎて", "はるのよの", "ひさかたの", "ひとはいさ", "ひともをし", "ふくからに", "ほととぎす", "みかきもり", "みかのはら", "みせばやな", "みちのくの", "みよしのの", "むらさめの", "ももしきや", "もろともに", "やすらはで", "やへむぐら", "やまがはに", "やまざとは", "ゆふされば", "ゆらのとを", "よのなかは", "よのなかよ", "よもすがら", "よをこめて", "わがいほは", "わがそでは", "わすらるる", "わすれじの", "わたのはら", "わびぬれば"]
// var cards = ["あきかせに", "あきのたの", "あけぬれは", "あさちふの", "あさほらけ", "あしひきの", "あはちしま", "あはれとも", "あひみての", "あふことの", "あまつかせ", "あまのはら", "あらさらむ", "あらしふく", "ありあけの", "ありまやま", "いにしへの", "いまこむと", "いまはたた", "うかりける", "うらみわひ", "おくやまに", "おとにきく", "おほえやま", "おほけなく", "おもひわひ", "をくらやま", "かくとたに", "かささきの", "かせそよく",  "きみかため", "きりきりす", "こころにも", "こぬひとを", "このたひは", "こひすてふ", "これやこの", "さひしさに", "しのふれと", "しらつゆに", "すみのえの", "せをはやみ", "たかさこの", "たちわかれ", "たまのをよ", "たれをかも", "ちきりきな", "ちはやふる", "つきみれは", "つくはねの", "なかからむ", "なからへは", "なけきつつ", "なけけとて", "なつのよは", "なにはえの", "なにはかた", "はなさそふ", "はるすきて", "はるのよの", "ひさかたの", "ひとはいさ", "ひともをし", "ふくからに", "ほとときす", "みかきもり", "みかのはら", "みせはやな", "みちのくの", "みよしのの", "むらさめの", "ももしきや", "もろともに", "やすらはて", "やへむくら", "やまかはに", "やまさとは", "ゆふされは", "ゆらのとを", "よのなかは", "よのなかよ", "よもすから", "よをこめて", "わかいほは", "わかそては", "わすらるる", "わすれしの", "わたのはら", "わひぬれは"]
  
class Random {
    constructor(seed = 88675123) {
        this.x = 123456789;
        this.y = 362436069;
        this.z = 521288629;
        this.w = seed;
    }
    
    // XorShift
    next() {
        const t = this.x ^ (this.x << 11);
        this.x = this.y;
        this.y = this.z;
        this.z = this.w;
        return this.w = (this.w ^ (this.w >>> 19)) ^ (t ^ (t >>> 8));
    }
    
    // min 以上 max 以下の乱数を生成する
    nextInt(min, max) {
        const r = Math.abs(this.next());
        return min + (r % (max + 1 - min));
    }
}

var japan_standard_time = new Date().toLocaleString({timeZone: "Asia/Tokyo"});
var date = new Date(japan_standard_time);
var seed = date.getYear() + date.getMonth() + date.getDay();
var random = new Random(seed);

var init_date = new Date(2022, 0, 31);  // ゲーム公開日の 1 日前
var GAME_NUM = parseInt((date-init_date) / 86400000);  // 何回目の Wordle か

var TARGET_CARD = cards[random.nextInt(0, cards.length - 1)];

function createGameBoard() {
    for (let i = 0; i < MAX_TURN; ++i) {
        for (let j = 0; j < 5; ++j) {
            // 表裏を合わせたタイルオブジェクト
            var tile = document.createElement("div");
            tile.className = "game-tile";
            tile.id = "game-tile" + String(i) + "-" + String(j);
            
            // 表面のタイル
            var front_tile = document.createElement("div");
            front_tile.className = "front-tile";
            var ch = document.createElement("p");
            ch.innerHTML = "　"
            front_tile.appendChild(ch);
            tile.appendChild(front_tile);
            
            // 裏面のタイル
            var back_tile = document.createElement("div");
            back_tile.className = "back-tile";
            var ch = document.createElement("p");
            ch.innerHTML = "　"
            back_tile.appendChild(ch);
            tile.appendChild(back_tile);
            
            document.body.getElementsByClassName("game-container")[0].appendChild(tile);
        }
        var br = document.createElement("br");
        document.body.getElementsByClassName("game-container")[0].appendChild(br);
    }
}

var keyboard_mode = 0;  // 0: front, 1: back

hiraganas1 = [["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ"],
              ["い", "き", "し", "ち", "に", "ひ", "み", "　", "り", "　"],
              ["う", "く", "す", "つ", "ぬ", "ふ", "む", "ゆ", "る", "を"],
              ["え", "け", "せ", "て", "ね", "へ", "め", "　", "れ", "　"],
              ["お", "こ", "そ", "と", "の", "ほ", "も", "よ", "ろ", "ん"]]
hiraganas2 = [["　", "が", "ざ", "だ", "　", "ば", "　", "　", "　", "　"],
              ["　", "ぎ", "じ", "ぢ", "　", "び", "　", "　", "　", "　"],
              ["　", "ぐ", "ず", "づ", "　", "ぶ", "　", "　", "　", "　"],
              ["　", "げ", "ぜ", "で", "　", "べ", "　", "　", "　", "　"],
              ["　", "ご", "ぞ", "ど", "　", "ぼ", "　", "　", "　", "　"]]

function createKeyboard() {
    // 表面のキーボード
    var front_keyboard = document.createElement("div");
    front_keyboard.id = "front-keyboard";
    
    for (let i = 0; i < hiraganas1.length; ++i) {
        for (let j = 0; j < hiraganas1[0].length; ++j) {
            var tile = document.createElement("div");
            tile.className = "keyboard-tile";
            tile.id = "front-keyboard-tile" + String(i) + "-" + String(j);
            tile.setAttribute("onclick", "put(\'" + hiraganas1[i][j] + "\')");
            
            var ch = document.createElement("p");
            ch.innerHTML = hiraganas1[i][j];
            tile.appendChild(ch);
            if (hiraganas1[i][j] == "　") tile.style.visibility = "hidden";
            
            front_keyboard.appendChild(tile);
        }
        var br = document.createElement("br");
        front_keyboard.appendChild(br);
    }
    
    document.body.getElementsByClassName("keyboard-container")[0].appendChild(front_keyboard);
    
    // 裏面のキーボード
    var back_keyboard = document.createElement("div");
    back_keyboard.id = "back-keyboard";
    back_keyboard.style.display = "none";
                 
    for (let i = 0; i < hiraganas2.length; ++i) {
        for (let j = 0; j < hiraganas2[0].length; ++j) {
            var tile = document.createElement("div");
            tile.className = "keyboard-tile";
            tile.id = "back-keyboard-tile" + String(i) + "-" + String(j);
            tile.setAttribute("onclick", "put(\'" + hiraganas2[i][j] + "\')");
            
            var ch = document.createElement("p");
            ch.innerHTML = hiraganas2[i][j];
            tile.appendChild(ch);
            if (hiraganas2[i][j] == "　") tile.style.visibility = "hidden";
            
            back_keyboard.appendChild(tile);
        }
        var br = document.createElement("br");
        back_keyboard.appendChild(br);
    }
    
    document.body.getElementsByClassName("keyboard-container")[0].appendChild(back_keyboard);
    
    
    // 裏表切り替えキー
    var tile = document.createElement("div");
    tile.className = "keyboard-tile";
    tile.id = "mode-change-tile";
    tile.style = "width: 56px;";
    tile.setAttribute("onclick", "changeMode()");
    
    var ch = document.createElement("p");
    ch.innerHTML = "切替";
    tile.appendChild(ch);
    
    document.body.getElementsByClassName("keyboard-container")[0].appendChild(tile);
    
    // 余白埋め
    var space = document.createElement("div");
    space.style = "display:inline-block; width:154px; height:28px";
    document.body.getElementsByClassName("keyboard-container")[0].appendChild(space);
    
    
    // バックスペースキー
    var tile = document.createElement("div");
    tile.className = "keyboard-tile";
    tile.id = "backspace-tile";
    tile.style = "width: 56px;";
    tile.setAttribute("onclick", "erase()");
    
    var ch = document.createElement("p");
    ch.innerHTML = "消す";
    tile.appendChild(ch);
    
    document.body.getElementsByClassName("keyboard-container")[0].appendChild(tile);
    
    // エンターキー
    var tile = document.createElement("div");
    tile.className = "keyboard-tile";
    tile.id = "enter-tile";
    tile.style = "width: 56px;";
    tile.setAttribute("onclick", "judge()");
    
    var ch = document.createElement("p");
    ch.innerHTML = "決定";
    tile.appendChild(ch);
    
    document.body.getElementsByClassName("keyboard-container")[0].appendChild(tile);
}

var timer_id;
var is_time_over = false;

function startTimer() {
    timer_id = setInterval(countDown, 1000);
    
    var time = 300 - 1;
    var min = 0;
    var sec = 0;
    var timer = document.getElementById("timer");
    timer.innerHTML = "05:00";

    function countDown() {
        if (time > 0) {
            var min = Math.floor(time / 60);
            var sec = time % 60;
            time--;

            if (sec >= 0 && sec < 10) {
                timer.innerHTML = "0" + min + ":0" + sec;
            } else {
                timer.innerHTML = "0" + min + ":" + sec;
            }
            
            if (min == 0 && sec <= 30) {
                timer.style.color = "red";
            }
        } else if (time == 0) {
            timer.innerHTML = "00:00";
            stopTimer();
            is_time_over = true;
            showResult();
        }
    }
}

function stopTimer() {
    clearInterval(timer_id);
    is_ended = true;
}

function calcRemainingTime(time_string) {
    if (time_string == "00:00") return "-----";
    var min = 5 - parseInt(time_string.substr(0, 2)) - 1;
    var sec = 60 - parseInt(time_string.substr(3, 2));
    if(sec == 60) {
        min++;
        sec = 0;
    }
    return "0" + min + ":" + (0 <= sec && sec <= 9 ? "0" : "") + sec;
}

var x = 0, y = 0;

function movePos(step) {
    y += step;
    x += Math.floor(y / 5);
    y = (y + 5555) % 5;
}

var is_start = false;

function put(ch) {
    if (is_ended) return;
    if (x >= 1 && !judged[x - 1]) return;
    if (!is_start) {
        is_start = true;
        startTimer();
    }
    var tile = document.getElementById("game-tile"+String(x)+"-"+String(y));
    tile.children[0].children[0].innerHTML = ch;
    tile.children[1].children[0].innerHTML = ch;
    movePos(+1);
	return; 
}

var judged = [];
for (let j = 0; j < MAX_TURN; ++j) judged.push(false);

function erase() {
    if (is_ended) return;
    if (x == 0 && y == 0) return;
    if (y == 0 && judged[x - 1]) return;
    movePos(-1);
    var tile = document.getElementById("game-tile"+String(x)+"-"+String(y));
    tile.children[0].children[0].innerHTML = "　";
    tile.children[1].children[0].innerHTML = "　";
    return; 
}

function changeMode() {
    if (is_ended) return;
    var front_keyboard = document.getElementById("front-keyboard");
    var back_keyboard = document.getElementById("back-keyboard");
    if (keyboard_mode == 0) {
        front_keyboard.style.display = "none";
        back_keyboard.style.display = "";
    }
    else {
        front_keyboard.style.display = "";
        back_keyboard.style.display = "none";
    }
    keyboard_mode = 1 - keyboard_mode;
}

function alert(message) {
    var mordal = document.getElementById("mordal");
    mordal.children[0].innerHTML = message;
    mordal.style.display = "";
    setTimeout(function() {
        mordal.style.display = "none";
    }, 1500);
}

var is_game_over = false;
var is_ended = false;
var result = [];

function showResult() {
    is_ended = true;
    if (is_time_over) document.getElementById("result-title").innerHTML = "TIME OVER";
    else if (is_game_over) document.getElementById("result-title").innerHTML = "GAME OVER";
    else document.getElementById("result-title").innerHTML = "Congratulations!";
    
    var tweet = document.getElementById("tweet");
    tweet.href = "https://twitter.com/intent/tweet?text=百人一首Wordle-" + GAME_NUM + "%20%20" + ((is_game_over || is_time_over) ? "X" : String(result.length)) + "/" + String(MAX_TURN);
    var time_string = calcRemainingTime(document.getElementById("timer").innerHTML);
    tweet.href += (!is_game_over ? "%20(" + (is_time_over ? "time over" : time_string) + ")" : "") + "%0a%0a";
    var result_title = document.getElementById("result-title");
    
    var result_time = document.createElement("p");
    result_time.id = "result-time";
    result_time.innerHTML = "タイム:　" + time_string;
    result_time.style = "margin-bottom: 10px";
    result_title.after(result_time);
    
    var mini_tile_container = document.createElement("div");
    mini_tile_container.className = "mini-tile-container";
    for (let i = 0; i < result.length; ++i) {
        for (let j = 0; j < result[0].length; ++j) {
            if (result[i][j] == 0) {
                tweet.href += "🟩";
                var tile = document.createElement("div");
                tile.className = "mini-tile";
                tile.style = "background: GREEN";
                mini_tile_container.appendChild(tile);
            }
            else if (result[i][j] == 1) {
                tweet.href += "🟨";
                var tile = document.createElement("div");
                tile.className = "mini-tile";
                tile.style = "background: YELLOW";
                mini_tile_container.appendChild(tile);
            }
            else if (result[i][j] == 2) {
                tweet.href += "⬛";
                var tile = document.createElement("div");
                tile.className = "mini-tile";
                tile.style = "background: GREY";
                mini_tile_container.appendChild(tile);
            }
        }
        tweet.href += "%0a";
        var br = document.createElement("br");
        mini_tile_container.appendChild(br);
    }
    result_time = document.getElementById("result-time");
    result_time.after(mini_tile_container);
    var br = document.createElement("br");
    mini_tile_container.after(br);
    tweet.href += "&url=https://hyakunin-isshu-wordle.herokuapp.com/%0a&hashtags=百人一首Wordle";
    
    var result_trigger = document.getElementById("result-trigger");
    result_trigger.checked = "checked";
}

function judge() {
    if (y != 0) return;
    if (is_ended) return;
    var key = "";
    for(let j = 0; j < 5; ++j) {
        var ch = document.getElementById("game-tile"+String(x-1)+"-"+String(j)).children[0].children[0];
        key += ch.innerHTML;
    }
    
    if (cards.indexOf(key) == -1) {
        alert("この札は存在しません");
        return;
    }
    
    result.push([]);
    var is_correct = true;
    for (let j = 0; j < 5; ++j) {
        var tile = document.getElementById("game-tile"+String(x-1)+"-"+String(j));
        if (key[j] == TARGET_CARD[j]) {
            tile.children[1].style.background = GREEN;
            updateKeyboardCharacter(key[j], 0);
            result[result.length - 1].push(0);
        }
        else {
            is_correct = false;
            tile.children[1].style.background = GRAY;
            var is_found = false;
            for (let k = 0; k < 5; ++k) {
                if (key[j] == TARGET_CARD[k]) {
                    tile.children[1].style.background = YELLOW;
                    updateKeyboardCharacter(key[j], 1);
                    result[result.length - 1].push(1);
                    is_found = true;
                    break;
                }
            }
            if (!is_found) {
                updateKeyboardCharacter(key[j], 2);
                result[result.length - 1].push(2);
            }
        }
        
        // タイルの回転
        tile.style.transitionDelay = String(0.4*j) + "s";
        tile.style.transform = "rotateX(-180deg)";
        tile.children[1].style.transitionDelay = String(0.4*j) + "s";
        tile.children[1].style.transform = "rotateX(-180deg)";
    }
    judged[x - 1] = true;
    
    if (is_correct) {
        stopTimer();
        setTimeout(showResult(), 2500);
    }
    else if (result.length == MAX_TURN) {
        is_game_over = true;
        setTimeout(showResult(), 2500);
    }
}

function updateKeyboardCharacter(ch, state) {
    var color;
    if (state == 0) color = GREEN;
    else if (state == 1) color = YELLOW;
    else if (state == 2) color = GRAY;
    
    for (let i = 0; i < hiraganas1.length; ++i) {
        for (let j = 0; j < hiraganas1[0].length; ++j) {
            if (hiraganas1[i][j] == ch) {
                setTimeout(function() {
                    var tile = document.getElementById("front-keyboard-tile"+String(i)+"-"+String(j));
                    tile.style.background = color;
                }, 2600);
            }
        }
    }
    
    for (let i = 0; i < hiraganas2.length; ++i) {
        for (let j = 0; j < hiraganas2[0].length; ++j) {
            if (hiraganas2[i][j] == ch) {
                setTimeout(function() {
                    var tile = document.getElementById("back-keyboard-tile"+String(i)+"-"+String(j));
                    tile.style.background = color;                    
                }, 2600);
            }
        }
    }
}

function showHowToUse() {
    if (document.cookie.indexOf("access_record") != -1) return;    
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.id = "balloon";
    var text = document.createElement("p");
    text.innerHTML = "遊び方はこちら";
    balloon.appendChild(text);
    
    var balloon_edge = document.createElement("div");
    balloon_edge.className = "balloon-edge";
    balloon_edge.id = "balloon-edge";
    
    document.body.appendChild(balloon);
    document.body.appendChild(balloon_edge);
    
    document.cookie = "access_record=1; max-age=2147483647";
    
    setTimeout(function() {
        var balloon = document.getElementById("balloon");
        var balloon_edge = document.getElementById("balloon-edge");
        balloon.style.display = "none";
        balloon_edge.style.display = "none";
    }, 2600)
}

function showPopup() {
    if (document.cookie.indexOf("popup_record") != -1) return;
    document.getElementById("popup1-trigger").checked = "checked";
    document.cookie = "popup_record=1; max-age=2147483647";
}