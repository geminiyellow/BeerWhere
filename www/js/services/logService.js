//Basic service to log info to the console for debugging
angular.module("beerwhere")
.factory('logService', function (DEBUG_MODE) {


    try { console.log("%c" + _getTimestamp(), "color: #d4530f; font-weight: bold;", 'DEBUG_MODE: ' + DEBUG_MODE); } catch (ex) { }


    function _log(text) {
        if (!DEBUG_MODE) { return; }

        try { console.log("%c" + _getTimestamp(), "color: #d4530f; font-weight: bold;", text); } catch (ex) { }
    };

    function _getTimestamp() {
        var d = new Date();
        var hr = d.getHours();
        var min = d.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        var sec = d.getSeconds();
        if (sec < 10) {
            sec = "0" + sec;
        }
        var ms = d.getMilliseconds();
        if (ms < 10) {
            ms = "0" + ms;
        }
        return '[' + hr + ':' + min + ':' + sec + '.' + ms + ']';
    };

    return {
        log: _log
    };
});