module.exports = function(express, app, models, settings) {

	app.set('view engine', 'pug');
	app.set('views', __dirname + '/views');
	app.use(express.static(__dirname + '/public'));

    //modify app to include user authentication middleware 
    return app;

};