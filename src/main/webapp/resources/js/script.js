	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'resources/views/pages/home.html',
				controller  : 'mainController'
			})
			
			// route for the catalog page
			.when('/catalog', {
				templateUrl : 'resources/views/pages/catalog.html',
				controller  : 'catalogController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'resources/views/pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'resources/views/pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('catalogController', function($scope) {
		$scope.message = 'I am an catalog page.';
	});
	
	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! This is only begin!';
	});