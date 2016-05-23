function House() {
    'use strict';
}

House.prototype = Object.create(Flat.prototype);

House.prototype.openFlat = function () {
    'use strict';
    var bedroom = new Bedroom();
    bedroom.showVoltage();
    bedroom.showDevicesInTheRoom();
    bedroom.showConnectedDevices();
    bedroom.showRoomName();
    var kitchen = new Kitchen();
    kitchen.showVoltage();
    kitchen.showDevicesInTheRoom();
    kitchen.showConnectedDevices();
    var hall = new Hall();
    hall.showVoltage();
    hall.showDevicesInTheRoom();
    hall.showConnectedDevices();
    Flat.call(this, [bedroom, kitchen, hall]);
};