// モジュールのインポート
var express = require('express');
var path = require('path');
var nunjucks = require('nunjucks');
var app = express();

// nunjucksが動くrootディレクトリの設定。空文字でないとだめ。/だけだとテンプレートが見つからないエラーがでる。
nunjucks.configure('', {
	autoescape: true,
	express: app,
});

// expressサーバーのrootディレクトリの設定
app.use(express.static(path.join(__dirname, '/')));

// expressサーバーのルーティング
// テンプレートの拡張子はnjkである必要あり。
app.get('/', (req, res) => {
    // 変数titleに割当
    res.render('index.njk', {
        title: 'Hello World!!'
    });
});
app.get('/ito2020', (req, res) => {
	res.render('ito2020/presentation.njk', {
		title: 'ito2020 | presentation',
	});
});


app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(8080, () => {
  console.log('Running at Port 8080...');
});
