$(document).ready(function () {
    "use strict";

    var content = $('.content');
    var size = $('.size');
    var border = $('.border');
    var header = $('.header');
    var triangle = $('.triangle');
    var p = $('.p');

    content.css({'display': 'flex'});

    size.css('width', '50%');

    border.css({
        'width': '25%',
        'border': '9px solid #AFEEEE',
        'border-radius': '2px',
        'box-shadow': '0 0 5px rgba(0,0,0,0.5)'
    });

    header.css({
        'font-family': 'sans-serif',
        'font-size': '12pt',
        'padding': '10px 10px',
        'background-color': '#FFD700',
        'position': 'relative'
    });

    triangle.css({
        'content': '',
        'display': 'inline-block',
        'margin-left': '10px',
        'margin-top': '0,1',
        'border': '10px solid transparent',
        'border-top-color': '#FFD700'
    });

    p.css({
        'font-family': 'sans-serif',
        'font-size': '11pt',
        'color': '#808080',
        'padding': '0px 10px 10px 10px',
        'margin-top': '-10px'
    });
});