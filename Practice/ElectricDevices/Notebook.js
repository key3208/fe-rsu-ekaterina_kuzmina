function Notebook(name, voltage, plug) {
    "use strict";
    this.nameNotebook = name;
    Device.call(this, name, voltage, plug);
}

Notebook.prototype = Object.create(Device.prototype);

Notebook.prototype.view = function () {
    "use strict";
    var name = this.nameNotebook;
    function pushButtonA() {
        console.info('Button "A" of ' + name + ' is pushed');
    }
    function pushButtonB() {
        console.info('Button "B" of ' + name + ' is pushed');
    }
    function pushButtonX() {
        console.info('Button "X" of ' + name + ' is pushed');
    }
    function pushButtonY() {
        console.info('Button "Y" of ' + name + ' is pushed');
    }

    return {
        pushButtonA: pushButtonA,
        pushButtonB: pushButtonB,
        pushButtonX: pushButtonX,
        pushButtonY: pushButtonY
    };
};