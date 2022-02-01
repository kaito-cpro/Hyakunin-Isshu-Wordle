var MAX_TURN = 6;

var GREEN = "#2cc258ab";
var YELLOW = "#ecc72294";
var GRAY = "#a3a2a287";

var cards = ["あきかぜに", "あきのたの", "あけぬれば", "あさぢふの", "あさぼらけ", "あしびきの", "あはぢしま", "あはれとも", "あひみての", "あふことの", "あまつかぜ", "あまのはら", "あらざらむ", "あらしふく", "ありあけの", "ありまやま", "いにしへの", "いまこむと", "いまはただ", "うかりける", "うらみわび", "おくやまに", "おとにきく", "おほえやま", "おほけなく", "おもひわび", "をぐらやま", "かくとだに", "かささぎの", "かぜそよぐ",  "きみがため", "きりぎりす", "こころにも", "こぬひとを", "このたびは", "こひすてふ", "これやこの", "さびしさに", "しのぶれど", "しらつゆに", "すみのえの", "せをはやみ", "たかさごの", "たちわかれ", "たまのをよ", "たれをかも", "ちぎりきな", "ちはやぶる", "つきみれば", "つくばねの", "ながからむ", "ながらへば", "なげきつつ", "なげけとて", "なつのよは", "なにはえの", "なにはがた", "はなさそふ", "はるすぎて", "はるのよの", "ひさかたの", "ひとはいさ", "ひともをし", "ふくからに", "ほととぎす", "みかきもり", "みかのはら", "みせばやな", "みちのくの", "みよしのの", "さびしさに", "しのぶれど", "しらつゆに", "すみのえの", "せをはやみ", "やすらはで", "やへむぐら", "やまがはに", "やまざとは", "ゆふされば", "ゆらのとを", "よのなかは", "よのなかよ", "よもすがら", "よをこめて", "わがいほは", "わがそでは", "わすらるる", "わすれじの", "わたのはら", "わびぬれば"]

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

var date = new Date();
var seed = date.getYear() + date.getMonth() + date.getDay();
var random = new Random(seed);
  
// var TARGET_CARD = cards[random.nextInt(0, cards.length - 1)];
var TARGET_CARD = "ちはやぶる";

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

var x = 0, y = 0;

function movePos(step) {
    y += step;
    x += Math.floor(y / 5);
    y = (y + 5555) % 5;
}

function put(ch) {
    if (x >= 1 && !judged[x - 1]) return;
    var tile = document.getElementById("game-tile"+String(x)+"-"+String(y));
    tile.children[0].children[0].innerHTML = ch;
    tile.children[1].children[0].innerHTML = ch;
    movePos(+1);
	return; 
}

var judged = [];
for (let j = 0; j < MAX_TURN; ++j) judged.push(false);

function erase() {
    if (x == 0 && y == 0) return;
    if (y == 0 && judged[x - 1]) return;
    movePos(-1);
    var tile = document.getElementById("game-tile"+String(x)+"-"+String(y));
    tile.children[0].children[0].innerHTML = "　";
    tile.children[1].children[0].innerHTML = "　";
    return; 
}

function changeMode() {
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
    document.getElementById("result-title").innerHTML = (is_game_over ? "GAME OVER..." : "Congratulations!");
    var tweet = document.getElementById("tweet");
    tweet.href = "https://twitter.com/intent/tweet?text=百人一首Wordle%20" + (is_game_over ? "X" : String(result.length)) + "/" + "6%0a%0a";
    for (let i = 0; i < result.length; ++i) {
        for (let j = 0; j < result[0].length; ++j) {
            if (result[i][j] == 0) tweet.href += "🟩";
            else if (result[i][j] == 1) tweet.href += "🟨";
            else if (result[i][j] == 2) tweet.href += "⬛";
        }
        tweet.href += "%0a";
    }
    tweet.href += "&url=https://hyakunin-isshu-wordle.herokuapp.com/%0a&hashtags=百人一首Wordle";
    setTimeout(function() {
        var result_trigger = document.getElementById("result-trigger");
        result_trigger.checked = "checked";
    }, 2500);
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
    
    if (is_correct) showResult();
    if (result.length == MAX_TURN) {
        is_game_over = true;
        showResult();
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