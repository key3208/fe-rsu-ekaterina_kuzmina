function addItem() {
    'use strict';
    var btnAdd = document.getElementById('btnAdd');
    var btnYes = document.getElementById('btnYes');
    var btnNo = document.getElementById('btnNo');
    var popup = document.getElementById('popup');
    var textInput = document.getElementById('textInpt');
    var list = document.getElementById('list');
    var quest = document.getElementById('quest');
    var popupNothing = document.getElementById('nothing');
    var btnClose = document.getElementById('btnClose');
    var btnDelete = document.getElementById('btnDelete');

    function countItems(listID) {
        var i = 0;
        var itemsCount = 0;
        while(listID.getElementsByTagName('li') [i += 1]) {
            itemsCount += 1;
        }
        return itemsCount;
    }

    function addBtnEvent() {
        if (textInput.value === '' || textInput.value === ' '){
            popupNothing.style.display = 'block';
        } else {
            popup.style.display = 'block';
            var questText = 'Are you sure you want to add new ToDo item: '+ textInput.value +' ?';
            var questParagraph = document.createElement('p');
            questParagraph.innerHTML = questText;
            quest.appendChild(questParagraph);
        }
    }
    function closeNotification() {
        popupNothing.style.display = 'none';
        popup.style.display = 'none';
        textInput.value = '';
        if (quest.firstChild) {
           quest.removeChild(quest.childNodes[0]);
        }
    }

    function addApprove() {
        var count = countItems(list) + 2;
        var li = document.createElement('li');
        var inputChkbx = document.createElement('input');
        var label = document.createElement('label');
        inputChkbx.type = 'checkbox';
        inputChkbx.id = 'check' + count;
        inputChkbx.className = 'chkBox';
        inputChkbx.setAttribute('onchange', 'changesForNewChexkBox(this.id)');
        label.htmlFor = 'check' + count;
        label.appendChild(document.createTextNode(' ' + textInput.value));
        li.appendChild(inputChkbx);
        li.appendChild(label);
        list.appendChild(li);
        closeNotification();
    }

    function removeItems() {
        var items = Array.prototype.slice.call(list.childNodes);
        var item;
        while (item = items.pop()) {
        if (item.firstChild && item.firstChild.checked) {
            list.removeChild(item);
        }
       }
    }
    btnDelete.addEventListener('click', removeItems);
    btnAdd.addEventListener('click', addBtnEvent);
    btnClose.addEventListener('click', closeNotification);
    btnYes.addEventListener('click', addApprove);
    btnNo.addEventListener('click', closeNotification);
}

function showDeleteButton() {
    "use strict";
    var checkboxes = document.getElementsByClassName('chkBox');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].onchange = function (){
            if (this.checked) {
                btnDelete.style.display = 'block';
            } else {
                btnDelete.style.display = 'none';
            }
        };
    }
}

function changesForNewChexkBox(arg) {
        var checkedNote = document.getElementById(arg);
        if (checkedNote.checked) {
                btnDelete.style.display = 'block';
            } else {
                btnDelete.style.display = 'none';
            }
    }
window.onload = function () {
    'use strict';
    addItem();
    showDeleteButton();
};