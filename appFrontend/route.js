module.exports = function(express, app, models, settings) {

	var router = express.Router();

	router.route('/')
		.get(function(req, res) {
			return res.render('home', {
				title: 'Home'
			});
		});

	app.use('/', router);

    //modify app to include user CRUD routes 
    return app;

};