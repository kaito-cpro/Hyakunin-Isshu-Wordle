import sys
import requests
import os

line_notify_token = os.environ["LINE_TOKEN"]  # LINE Notify のアクセストークン
# LINE Notify のアクセストークンの環境変数の設定の仕方
# $ heroku config:set LINE_TOKEN=******* --app hyakunin-isshu-wordle

line_notify_api = 'https://notify-api.line.me/api/notify'  # LINE Notify の API アドレス
        
message = '\n'

with open('message.txt') as f:
    message += f.read()

if len(message) == 1:
    print("<p>1文字以上入力してください。</p>")
    print('''<div class="space"></div>''')
    print('''<input type="button" onclick="history.back()" value="戻る">''')
    exit()

payload = {'message': message}
headers = {'Authorization': 'Bearer ' + line_notify_token} 
line_notify = requests.post(line_notify_api, data=payload, headers=headers)

print("<p>メッセージの送信が完了しました。</p>")
print('''<div class="space"></div>''')
print('''<input type="button" onclick="location.href='index.php';" value="OK">''')