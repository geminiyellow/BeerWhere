angular.module('beerwhere', ['ionic'])

//Set to false for release to stop console debugging
.constant('DEBUG_MODE', true)

.config(['$compileProvider', function ($compileProvider) {
    // Needed for phonegap routing
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|ghttps?|ms-appx|x-wmapp0):/);
}])

.config(['$ionicConfigProvider', function ($ionicConfigProvider) {
    $ionicConfigProvider.scrolling.jsScrolling(false);
}])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: "/home",
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
    });

    $urlRouterProvider.otherwise('/home');
}])

//Global loading handler based on promises in the queue
.config(['$provide', function ($provide) {
    $provide.decorator('$q', function ($delegate, $rootScope) {
        var pendingPromisses = 0;
        $rootScope.$watch(
          function () { return pendingPromisses > 0; },
          function (loading) { $rootScope.loading = loading; console.log('loading: ' + loading); }
        );
        var $q = $delegate;
        var origDefer = $q.defer;
        $q.defer = function () {
            var defer = origDefer();
            pendingPromisses++;
            defer.promise.finally(function () {
                pendingPromisses--;
            });
            return defer;
        };
        return $q;
    });
}]);

