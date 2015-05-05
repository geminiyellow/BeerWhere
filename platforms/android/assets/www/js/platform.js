(function () {
    // Append the bind() polyfill
    var scriptElem = document.createElement('script');
    scriptElem.setAttribute('src', 'js/android2.3-jscompat.js');
    if (document.body) {
        document.body.appendChild(scriptElem);
    } else {
        document.head.appendChild(scriptElem);
    }
}());



//Fake deviceId stuff for testing
window.device = window.device || {};

window.device.uuid = "123";

//TODO - Fix location in the emulator
navigator.geolocation.getCurrentPosition = function (callback) {
    callback({ coords: { latitude: -36.84846, longitude: 174.763331 } });
};