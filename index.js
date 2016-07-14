var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(express.static('public'));

var helpers = {
	randomString: function() {
		return require('crypto').randomBytes(20).toString('hex');
	}
};

app.get('/', function(req, res) {
	res.render('home', {
		token: helpers.randomString(),
		menu: 'home'
	});
});

app.listen(3000);
