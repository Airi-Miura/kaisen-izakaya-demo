# 海鮮酒場 凪 -NAGI- Demo Site

飲食店向けホームページ制作サービスの営業・実績提示用に作成した、架空店舗「海鮮酒場 凪 -NAGI-」のデモサイトです。
朝獲れ鮮魚、刺身、浜焼き、日本酒を軸に、活気はありつつも安っぽくならない海鮮居酒屋の雰囲気を表現しています。

## 使用技術

- HTML
- CSS
- JavaScript

React、Next.js、外部ライブラリ、外部画像URLは使用していません。
`index.html` をブラウザで開くだけで確認できます。

## ファイル構成

```text
kaisen-izakaya-demo/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 実店舗向けに変更する項目

- 店名
- キャッチコピー、サブコピー
- コンセプト本文
- 本日のおすすめメニュー
- 人気メニュー
- 日本酒、ドリンク内容
- コース名、内容、価格
- 営業時間
- 定休日
- 住所
- 電話番号
- 支払い方法
- 席数
- 喫煙情報
- InstagramなどのSNSリンク
- Web予約URL
- Google Mapの埋め込み
- 料理写真プレースホルダーの実写真への差し替え
- meta description、OGP文言

変更しやすいように、`index.html` 内へ実店舗向けコメントを入れています。

## Netlifyで公開する方法

1. Netlifyにログインします。
2. 「Add new site」から「Deploy manually」を選びます。
3. `kaisen-izakaya-demo` フォルダをドラッグ&ドロップします。
4. 公開URLが発行されたら、ブラウザで表示を確認します。
5. 独自ドメインを使う場合は、Netlifyの「Domain management」から設定します。

静的ファイルのみで構成されているため、ビルドコマンドは不要です。

## GitHubにPushする方法

```bash
cd kaisen-izakaya-demo
git init
git add .
git commit -m "Add kaisen izakaya demo site"
git branch -M main
git remote add origin https://github.com/ユーザー名/リポジトリ名.git
git push -u origin main
```

既存リポジトリへ追加する場合は、対象リポジトリ内にこのフォルダを配置して `git add` してください。

## 今後追加できる機能例

- 実写真ギャラリー
- 日替わりメニュー更新機能
- お知らせ、臨時休業案内
- 予約フォーム
- Google Mapの本番埋め込み
- Instagram投稿表示
- 多言語切り替え
- 宴会向けLP
- アレルギー表記
- Google Analytics、Search Console設定

## 注意

掲載している住所・電話番号・店舗情報はすべて架空のものです。
実店舗に公開する際は、必ず正しい情報へ差し替えてください。
