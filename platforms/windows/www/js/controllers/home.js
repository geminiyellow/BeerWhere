angular.module('beerwhere')

.controller('HomeCtrl', function ($scope, UntappdServer, logService) {

    $scope.loading = true;

    window.HandleDeviceReady(loadHome);

    function loadHome() {
        
        navigator.geolocation.getCurrentPosition(function (position) {
            logService.log("position: " + JSON.stringify(position));

            UntappdServer.localFeed(position.coords.latitude, position.coords.longitude)
            .then(function (response) {
                logService.log("UntappdServer.localFeed: " + JSON.stringify(response));

                $scope.checkins = response.checkins.items;

                $scope.loading = false;
            });
        },
        function (error) {
            logService.log("getCurrentPosition error: " + JSON.stringify(error));
            $scope.loading = false;
        });
    };


    $scope.Retry = function () {
        loadHome();
    };
});