function Kitchen() {
    'use strict';
    var sharp = new TVset('Sharp', 45, false);
    var braun = new Kettle('Braun', 30, false);
    var ariston = new Fridge('Ariston', 55, true);
    ariston.ice();
    var vitek = new MicrowaveOven('Vitek', 30, true);
    vitek.heat();
    Room.call(this, 'Kitchen', [sharp, braun, ariston, vitek]);
}

Kitchen.prototype = Object.create(Room.prototype);