function Bedroom() {
    'use strict';
    var floorLamp = new Lamp('IKEA lamp', 20, true);
    var lg = new TVset('LG', 70, true);
    var acer = new Notebook('Acer Aspire', 30, true);
    acer.view().pushButtonA();
    var winxp = new Notebook('Windows XP', 60, false);
    winxp.view().pushButtonX();
    Room.call(this, 'Bedroom', [lg, floorLamp, acer, winxp]);
}

Bedroom.prototype = Object.create(Room.prototype);