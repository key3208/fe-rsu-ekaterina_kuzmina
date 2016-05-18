function task1() {
    "use strict";
    var i;
    var content = document.getElementsByClassName("content");
    var size = document.getElementsByClassName('size');
    var border = document.getElementsByClassName('border');
    var header = document.getElementsByClassName('header');
    var triangle = document.getElementsByClassName('triangle');
    var p = document.getElementsByClassName('p');
    content[0].style.cssText = 'display: flex;';
    for (i = 0; i < size.length; i += 1) {
        size[i].style.cssText = 'width: 50%;';
    }
    border[0].style.cssText = 'width: 25%; border: 9px solid #AFEEEE; border-radius: 2px; box-shadow: 0 0 5px rgba(0,0,0,0.5);';
    header[0].style.cssText = 'font-family: sans-serif; font-size: 12pt; padding: 10px 10px; background-color: #FFD700; position: relative;';
    triangle[0].style.cssText = 'content: ""; display: inline-block; margin-left: 15px; margin-top: 0,1; border: 10px solid transparent; border-top-color: #FFD700;';
    p[0].style.cssText = 'font-family: sans-serif; font-size: 11pt; color: #808080; padding: 0px 10px 10px 10px; margin-top: -10px;';
}

window.onload = function () {
    "use strict";
    task1();
};
	
	
	
	
	
	
	