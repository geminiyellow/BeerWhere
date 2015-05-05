// Platform specific overrides will be placed in the merges folder versions of this file



//Fake deviceId stuff for testing
window.device = window.device || {};

window.device.uuid = "123";


(function () {
    // Append the safeHTML polyfill
    var scriptElem = document.createElement('script');
    scriptElem.setAttribute('src', 'js/winstore-jscompat.js');
    if (document.body) {
        document.body.appendChild(scriptElem);
    } else {
        document.head.appendChild(scriptElem);
    }
}());


//TODO - Fix location in the emulator
navigator.geolocation.getCurrentPosition = function (callback) {
    callback({ coords: { latitude: -36.84846, longitude: 174.763331 } });
};