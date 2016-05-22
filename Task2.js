$(document).ready(function () {
    "use strict";

    var topMenu = $('#top-menu');
    var menu = $('#menu');
    var li = $('li');

    topMenu.css({
        'display': 'block',
        'margin-top': '-10px',
        'width': '100px',
        'background-color': '#00BFFF',
        'border-radius': '0 0 10px 10px',
        'border-bottom': '2px solid #6495ED',
        'border-left': '2px solid #6495ED',
        'border-right': '2px solid #6495ED',
        'font-family': 'serif',
        'text-align': 'center',
        'font-size': '12pt',
        'padding': '10px',
        'color': 'white'
    });

    menu.css('display', 'none');

    function makeLi() {
        li.css({
            'list-style': 'none',
            'font-family': 'serif',
            'font-size': '12pt',
            'color': 'white',
            'width': '120px',
            'height': '20px',
            'text-align': 'center',
            'line-height': '10px',
            'margin-top': '-20px',
            'padding-top': '15px',
            'background-color': '#00BFFF',
            'border-left': '2px solid #6495ED',
            'border-right': '2px solid #6495ED',
            'padding-bottom': '15px',
            'margin-bottom': '-18px'
        });
    }

    function liHover() {
        li.hover(
            function () {
                $(this).css({
                    'list-style': 'none',
                    'text-align': 'center',
                    'font-size': '12pt',
                    'color': 'white',
                    'width': '120px',
                    'height': '20px',
                    'background-color': '#1E90FF',
                    'border-left': '2px solid #6495ED',
                    'border-right': '2px solid #6495ED',
                    'padding-top': '15px',
                    'margin-top': '-20px',
                    'line-height': '10px',
                    'padding-bottom': '15px',
                    'margin-bottom': '-20px'
                });
            },
            function () {
                $(this).css({
                    'list-style': 'none',
                    'text-align': 'center',
                    'font-size': '12pt',
                    'color': 'white',
                    'width': '120px',
                    'height': '20px',
                    'background-color': '#00BFFF',
                    'border-left': '2px solid #6495ED',
                    'border-right': '2px solid #6495ED',
                    'padding-top': '15px',
                    'margin-top': '-20px',
                    'line-height': '10px',
                    'padding-bottom': '15px',
                    'margin-bottom': '-20px'
                });
            }
        );
    }

    topMenu.hover(function () {
        topMenu.css('box-shadow', '0 5px 20px -2px #B0E0E6, -5px 0 20px -2px #B0E0E6, 5px 0 20px -2px #B0E0E6');
    },
            function () {
        topMenu.css('box-shadow', 'none');
    });

    var kol_clicks = 1;
    function clicks(number) {
        return number % 2 === 0;
    }

    topMenu.on('click', function () {
        kol_clicks += 1;
        console.log(kol_clicks);
        console.log(clicks(kol_clicks));
        if (clicks(kol_clicks)) {
            makeLi();
            liHover();
            topMenu.css('border-top', '2px solid brown');
            menu.css({
                'display': 'block',
                'width': '100',
                'background-color': '#00BFFF',
                'font-family': 'serif',
                'text-align': 'center',
                'font-size': '12pt',
                'color': 'white',
                'padding': '0'
            });
        } else {
            menu.css({
                'display': 'none',
                'width': '100px',
                'background-color': '#00BFFF',
                'font-family': 'serif',
                'text-align': 'center',
                'font-size': '12pt',
                'color': 'white',
                'padding': '0'
            });
        }
    });
});