function task2() {
    "use strict";
    var topMenu = document.getElementById('top-menu');
    var menu = document.getElementById('menu');
    var li = document.getElementsByTagName('li');
    topMenu.style.cssText = 'display: block; margin-top: -10px; width: 100px; background-color: #00BFFF; border-radius: 0 0 10px 10px; border-bottom: 2px solid #6495ED; border-left: 2px solid #6495ED; border-right: 2px solid #6495ED; font-family: serif; text-align: center; font-size: 12pt; padding: 10px; color: white;';
    menu.style.cssText = 'display: none;';
    function makeLi() {
        var i;
        li[0].style.cssText = 'font-family: serif; font-size: 12pt; color: white; width: 120px; height: 20px; text-align: center; line-height: 10px; margin-top:-20px; padding-top: 10px; background-color: #00BFFF; border-left: 2px solid #6495ED; border-right: 2px solid #6495ED;';
        for (i = 1; i < li.length - 1; i += 1) {
            li[i].style.cssText = 'font-family: serif; font-size: 12pt; color: white; width: 120px; height: 20px; text-align: center; line-height: 10px; padding-top: 10px; background-color: #00BFFF; border-left: 2px solid #6495ED; border-right: 2px solid #6495ED;';
        }
        li[4].style.cssText = 'font-family: serif; font-size: 12pt; color: white; width: 120px; height: 20px; text-align: center; line-height: 10px; padding-top: 10px; padding-bottom: 5px; background-color: #00BFFF; border-left: 2px solid #6495ED; border-right: 2px solid #6495ED; margin-bottom: -18px;';
    }

    function liHover() {
        var i;
        li[0].onmouseover = function () {
            this.style.cssText = 'text-align: center; font-size: 12pt; color: white; width: 120px; height: 20px; background-color: #1E90FF; border-left: 2px solid #6495ED; border-right: 2px solid #6495ED; padding-top: 10px; margin-top:-20px; line-height: 10px;';
        };
        li[0].onmouseout = function () {
            this.style.cssText = 'text-align: center; font-size: 12pt; color: white; width: 120px; height: 20px; background-color: #00BFFF; border-left: 2px solid #6495ED; border-right: 2px solid #6495ED; padding-top: 10px; margin-top:-20px; line-height: 10px;';
        };
        for (i = 1; i < li.length - 1; i += 1) {
            li[i].onmouseover = function () {
                this.style.cssText = 'text-align: center; font-size: 12pt; color: white; width: 120px; height: 20px; background-color: #1E90FF; border-left: 2px solid #6495ED; border-right: 2px solid #6495ED; padding-top: 10px; line-height: 10px;';
            };
            li[i].onmouseout = function () {
                this.style.cssText = 'text-align: center; font-size: 12pt; color: white; width: 120px; height: 20px; background-color: #00BFFF; border-left: 2px solid #6495ED; border-right: 2px solid #6495ED; padding-top: 10px; line-height: 10px;';
            };
        }
        li[4].onmouseover = function () {
            this.style.cssText = 'text-align: center; font-size: 12pt; color: white; width: 120px; height: 20px; background-color: #1E90FF; border-left: 2px solid #6495ED; border-right: 2px solid #6495ED; padding-top: 10px; padding-bottom: 5px; margin-bottom: -18px; line-height: 10px;';
        };
        li[4].onmouseout = function () {
            this.style.cssText = 'text-align: center; font-size: 12pt; color: white; width: 120px; height: 20px; background-color: #00BFFF; border-left: 2px solid #6495ED; border-right: 2px solid #6495ED; padding-top: 10px; padding-bottom: 5px; margin-bottom: -18px; line-height: 10px;';
        };
    }

    topMenu.onmouseover = function () {
        topMenu.style.boxShadow = '0 5px 20px -2px #B0E0E6, -5px 0 20px -2px #B0E0E6, 5px 0 20px -2px #B0E0E6';
    };
    topMenu.onmouseout = function () {
        topMenu.style.boxShadow = 'none';
    };

    var kol_clicks = 1;
    function clicks(number) {
        return number % 2 === 0;
    }

    topMenu.onclick = function () {
        kol_clicks += 1;
        console.log(kol_clicks);
        console.log(clicks(kol_clicks));
        if (clicks(kol_clicks)) {
            makeLi();
            liHover();
            topMenu.style.borderTop = '2px solid brown';
            menu.style.cssText = 'display: block; width: 100px; background-color: #00BFFF; font-family: serif; text-align: center; font-size: 12pt; color: white; padding: 0;';
        } else {
            menu.style.cssText = 'display: none; width: 100px; background-color: #00BFFF; font-family: serif; text-align: center; font-size: 12pt; color: white; padding: 0;';
        }
    };
}

window.onload = function () {
    "use strict";
    task2();
};