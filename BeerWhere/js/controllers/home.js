angular.module('beerwhere.controller.home', [])

.controller('HomeCtrl', function ($scope, UntappdServer, $ionicPopup) {

    window.HandleDeviceReady(loadHome);

    function loadHome() {
        
        if (!$scope.IsLoading) {
            $scope.IsLoading = true;

            navigator.geolocation.getCurrentPosition(function (position) {
                console.log("position: " + JSON.stringify(position));
                UntappdServer.localFeed(position.coords.latitude, position.coords.longitude,
                    function (response) {
                        $scope.checkins = response.checkins.items;

                        $scope.IsLoading = false;
                    }, function (error) {
                        alert("localFeed error: " + JSON.stringify(error));
                        $scope.IsLoading = false;
                    });
            },
            function (error) {
                alert("getCurrentPosition error: " + JSON.stringify(error));
                $scope.IsLoading = false;
            });
        }
    };


    $scope.Retry = function () {
        loadHome();
    };
});