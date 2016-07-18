
var api = require('accelerated.api');
var apiBodyParser = require('accelerated.api.body-parser').use();
var apiVersioning = require('accelerated.api.versioning').use();
var apiModule = require('./apiModule').use();
var apiModuleExtended = require('./apiModuleExtended').use();
var appFrontend = require('./appFrontend').use();

api.useMiddlewares([
	[apiBodyParser.key, apiBodyParser.middleware],
	[apiVersioning.key, apiVersioning.middleware],
	[appFrontend.key, appFrontend.middleware],
	[apiModule.key, apiModule.middleware],
	[apiModuleExtended.key, apiModuleExtended.middleware]
]);

api.useModels([
	[apiModule.key, apiModule.model],
	[apiModuleExtended.key, apiModuleExtended.model],
	[appFrontend.key, appFrontend.model],
]);

api.useRoutes([
	[apiModule.key, apiModule.route],
	[apiModuleExtended.key, apiModuleExtended.route],
	[appFrontend.key, appFrontend.route],
]);

api.run();
