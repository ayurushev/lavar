var app = angular.module('app', ['ui.router', 'vcRecaptcha', 'templates']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider.state('intro', {
		url: '/intro',
		templateUrl: 'partials/intro.html',
		controller: 'IntroController'
	}).state('home', {
		url: '/home',
		templateUrl: 'partials/home.html',
		controller: 'HomeController'
	}).state('home.about', {
		url: '/about',
		templateUrl: 'partials/about.html',
		title: 'Обо мне'
	}).state('home.projects', {
		url: '/projects',
		templateUrl: 'partials/projects.html',
		controller: 'ProjectsController',
		title: 'Работы'
	}).state('home.contact', {
		url: '/contact',
		templateUrl: 'partials/contact.html',
		controller: 'ContactController',
		title: 'Контакт'
	});
	$urlRouterProvider.when('/', '/intro');
	$urlRouterProvider.otherwise('/')
	$locationProvider.html5Mode(true);
}]);

app.run(['$rootScope', '$transitions', '$window', '$interval', function($rootScope, $transitions, $window, $interval) {

	$transitions.onSuccess({}, function(trans) {
		var title = trans.to().title;
		$window.document.title = title ? 'Андрей Юрушев - ' + title : 'Андрей Юрушев';

		if (trans.to().name === 'home') {
			$rootScope.$broadcast('home-content-mode', { enabled: false });
		}

		if (trans.to().name.includes('home.')) {
			$rootScope.$broadcast('home-content-mode', {
				enabled: true,
				timeout: !trans.from().name || trans.from().name == '' ? 1200 : 0
			});
		}
	});

	$window.onblur = function() {
		$rootScope.$broadcast('window-blur');
	}

	$window.onfocus = function() {
		$rootScope.$broadcast('window-focus');
	}
}]);
