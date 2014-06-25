angular.module('beerwhere', ['ionic', 'beerwhere.controller.home', 'beerwhere.service.untappd'])


.config(function ($compileProvider) {
    // Needed for phonegap routing
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);
})

.config(function ($stateProvider, $urlRouterProvider) {

    // Set up the initial routes that our app will respond to.
    // These are then tied up to our nav router which animates and
    // updates a navigation bar
    $stateProvider.state('home', {
        url: "/home",
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
    });

    $stateProvider.state('game', {
        url: "/game",
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
    });

    $stateProvider.state('stats', {
        url: "/stats",
        templateUrl: 'views/stats.html',
        controller: 'StatsCtrl'
    });

    $stateProvider.state('leaderboards', {
        url: "/leaderboards",
        templateUrl: 'views/leaderboards.html',
        controller: 'LeadersCtrl'
    });

    $stateProvider.state('settings', {
        url: "/settings",
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
    });

    $urlRouterProvider.otherwise('/home');
});
