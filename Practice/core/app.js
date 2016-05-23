function Application() {
    'use strict';
}

Application.prototype.start = function () {
    'use strict';
    var flat21 = new House();
    flat21.openFlat();
    flat21.searchDevicesInRooms();
};