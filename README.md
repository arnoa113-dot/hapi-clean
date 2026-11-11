# HAPI CLEAN 公式サイト

東京（北区・板橋区・足立区ほか）と川口駅〜大宮駅エリアの、宿泊施設・民泊専門清掃サービス「HAPI CLEAN」の集客用ホームページです。

ビルド不要の静的サイト（HTML / CSS / JavaScript のみ）です。`index.html` をブラウザで開けばそのまま確認できます。

## ファイル構成

```
index.html      トップページ（文章・料金表・FAQ・フォームなど）
consult.html    スタッフ教育・家庭清掃のページ
css/style.css   デザイン（色・余白・レイアウト）
js/main.js      お問い合わせフォームの動作（FormSubmit 経由で mjam830.32@gmail.com へメール送信）
CHANGELOG.md    変更履歴
```

## よく変更する場所

| 変更したい内容 | 場所 |
|---|---|
| キャッチコピー・紹介文 | `index.html` の `<!-- Hero -->` |
| サービス内容・リネン方式 | `index.html` の `<!-- Service -->` |
| 料金表・割増・キャンセル | `index.html` の `<!-- Price -->` |
| 対応エリア | `index.html` の `<!-- Area -->` と会社概要・フッター・`<meta name="description">` |
| よくある質問 | `index.html` の `<!-- FAQ -->` |
| スタッフ教育・家庭清掃 | `consult.html`（トップの `<!-- Other -->` に紹介カード） |
| 会社概要・SNS | `index.html` の `<!-- Company -->` |
| ブランドカラー | `css/style.css` 冒頭の `:root`（`--teal` がメイン色、`--accent` がオレンジ） |

体制（専任スタッフが必ず1名入る2名体制）・料金・対応エリアは複数箇所（料金表・FAQ・会社概要・フッター）に書かれているため、変更時はまとめて直してください。

## 未対応・今後の課題

- お問い合わせフォームの初回送信時に、FormSubmit から mjam830.32@gmail.com へ「確認（Activate）」メールが届きます。リンクを押すまで2通目以降は届きません。
- SNS：Instagram（@cleanhapi_88）は掲載済み。Threads / note はアカウント開設後にリンクを追加。
- 公開先（ドメイン・ホスティング）未定。
