function TVset(name, voltage, plug) {
    'use strict';
    Device.call(this, name, voltage, plug);
}

TVset.prototype = Object.create(Device.prototype);

TVset.prototype.remoteController = function () {
    "use strict";
    function changeChannel() {
        console.info('Channel was changed');
    }
    function openApps() {
        console.info('Went into the apps');
    }
    function powerOn() {
        console.info('Power On');
    }
    function powerOff() {
        console.info('Power Off');
    }

    return {
        changeChannel: changeChannel,
        openApps: openApps,
        powerOn: powerOn,
        powerOff: powerOff
    };
};