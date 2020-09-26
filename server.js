// モジュールのインポート
var express = require('express');
var path = require('path');
var nunjucks = require('nunjucks');
var app = express();
var PORT = process.env.PORT || 8000;

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
}).get('/ito2020', (req, res) => {
	res.render('ito2020/presentation.njk', {
		title: 'ito2020 | presentation',
	});
}).get('/phys-exp-1/x-ray', (req, res) => {
	res.render('phys-exp-1/x-ray/index.njk', {
		title: 'phys-exp-1 | x-ray',
	});
}).get('/phys-exp-1/elec-1', (req, res) => {
	res.render('phys-exp-1/elec-1/index.njk', {
		title: 'phys-exp-1 | elec-1',
	});
})



app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log('Running at Port 8080...');
});
