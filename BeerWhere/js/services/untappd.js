angular.module('beerwhere.service.untappd', [])

.factory('UntappdServer', function ($http) {

    var __apiUrl = "http://api.untappd.com/v4";
    var __clientId = "14B1F22CFC4A75654230472242F6B8948426BF2D";
    var __clientSecret = "ADE6438ECA2F3DAA5BD6F8D7941E478490BB04D1";


    function getUniqueParam() {
        var unique = new Date().getTime();
        return "unique=" + unique;
    };




    function _localFeed(lat, lng, onSuccess, onError) {
        var url = __apiUrl + "/thepub/local";
        url += "?client_id=" + __clientId;
        url += "&client_secret=" + __clientSecret;
        url += "&lat=" + lat;
        url += "&lng=" + lng;
        url += "&" + getUniqueParam()

        return $http.get(url)
            .success(function (response) {
                //TODO - check the response here?
                onSuccess(response.response);
            })
            .error(onError);
    };



    return {
        localFeed: _localFeed
    };

});