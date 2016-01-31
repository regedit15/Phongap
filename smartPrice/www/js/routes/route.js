app.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl : 'home.html',
		controller : 'smartPriceController'
	}).when('/acercaDe', {
		templateUrl : 'acercaDe.html',
		controller : 'smartPriceController'
	}).otherwise({
		redirectTo : '/'
	});

});