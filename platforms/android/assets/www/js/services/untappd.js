//Do all the untappd stuff here bro


angular.module('beerwhere')
.factory('UntappdServer', function ($http, logService) {

    var __apiUrl = "http://api.untappd.com/v4";
    var __clientId = "14B1F22CFC4A75654230472242F6B8948426BF2D";
    var __clientSecret = "ADE6438ECA2F3DAA5BD6F8D7941E478490BB04D1";



    function getUniqueParam() {
        //Unique url parameter added to make sure responses aren't cached
        var unique = new Date().getTime();
        return "uq=" + unique;
    };




    function _localFeed(lat, lng) {
        var url = __apiUrl + "/thepub/local";
        url += "?client_id=" + __clientId;
        url += "&client_secret=" + __clientSecret;
        url += "&lat=" + lat;
        url += "&lng=" + lng;
        url += "&" + getUniqueParam()

        return $http.get(url).then(__processResponse);
    };




    function __processResponse(apiResponse) {
        //TODO - check response status etc. for errors
        logService.log(JSON.stringify(apiResponse));

        if (apiResponse) {
            return apiResponse.data.response;
        }
        return null;
    };



    return {
        localFeed: _localFeed
    };

});