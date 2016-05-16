//1. Write a JavaScript program to display the current day and time in the following format.
//Sample Output: Today is: Friday.
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day] + ".");

//2. Write a JavaScript program to get the current date.
var currentDate = new Date();
var day1 = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
console.log(day1 + "/" + month + "/" + year);

//3. Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.
var year1;
var d;
for (year1 = 2014; year1 <= 2050; year1 += 1) {
    d = new Date(year1, 0, 1);
    if (d.getDay() === 0) {
        console.log("1st January is being a Sunday  " + year1);
    }
}

//4. Write a JavaScript program to calculate days left until next New Year.
var today1 = new Date();
var cmas = new Date(today1.getFullYear(), 11, 31);
if (today1.getMonth() === 11 && today1.getDate() > 31) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((cmas.getTime() - today1.getTime()) / (one_day)) +
        " days left until NewYear!");

//5. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
//   Test Data :
//   console.log(is_array(qwe));
//   console.log(is_array([1, 2, 4, 0]));
//   false
//   true
function is_array(value) {
    "use strict";
    return value.constructor === Array;
}
console.log(is_array('qwe'));
console.log(is_array([1, 2, 4, 0]));

//6. Write a JavaScript function to clone an array
var array_Clone = function (arra1) {
    "use strict";
    return arra1.slice(0);
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//7. Write a JavaScript function to find the most frequent item of an array.
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
var i;
var j;
for (i = 0; i < arr1.length; i += 1) {
    for (j = i; j < arr1.length; j += 1) {
        if (arr1[i] === arr1[j]) {
            m += 1;
        }
        if (mf < m) {
            mf = m;
            item = arr1[i];
        }
    }
    m = 0;
}
console.log(item + " ( " + mf + " times ) ");

//8. Write a JavaScript function that inverts the case of the letters of the given string and
//   returns new string
var string = "My NamE is kUZMina EKaTERIna";
var newString = '';
var i1 = 0;
var char;
while (i1 < string.length) {
    char = string.charAt(i1);
    if (char === char.toUpperCase()) {
        newString += char.toLowerCase();
    } else if (char === char.toLowerCase()) {
        newString += char.toUpperCase();
    }
    i1 += 1;
}
console.log(newString);

//9. Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)
function removeDuplicatesFromArray() {
    "use strict";
    var originArray = ['111', '2', '45', '8888', 'Moais', 'hello', 'ANOTHER', 'Cat', '111', 'another', 'moais', 'cat', '8888'];
    var NoDupArray = [];
    var flag;
    var i2;
    var j1;
    for (i2 = 0; i2 < originArray.length; i2 += 1) {
        flag = false;
        for (j1 = 0; j1 < NoDupArray.length; j1 += 1) {
            if (originArray[i2].toLowerCase() === NoDupArray[j1].toLowerCase()) {
                flag = true;
                break;
            }
        }
        if (flag === false) {
            NoDupArray.push(originArray[i2]);
        }
    }
    return NoDupArray;
}
console.log(removeDuplicatesFromArray());

//10. Write a JavaScript program to shuffle an array
function shuffle(arra1) {
    "use strict";
    var ctr = arra1.length;
    var temp;
    var index;
// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr -= 1;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));

//11. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values
//    from an array
function filter_array(test_array) {
    "use strict";
    var index = -1;
    var arr_length = test_array ? test_array.length
        : 0;
    var resIndex = -1;
    var result = [];
    var value;
    while (++ index < arr_length) {
        value = test_array[index];
        if (value) {
            result[++resIndex] = value;
        }
    }
    return result;
}
console.log(filter_array([NaN, 0, 15, false, -22, '', undefined, 47, null]));

//12. Write a JavaScript function to sort the following array of objects by title value
//    using ‘sort’ method
//    var library = [
//             { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//             { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//             { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];
var library = [
    {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
function compare_to_sort(x, y) {
    "use strict";
    if (x.title < y.title) {
        return -1;
    }
    if (x.title > y.title) {
        return 1;
    }
    return 0;
}
console.log(library.sort(compare_to_sort));

//13. Write a JavaScript function to merge two arrays and removes all duplicates elements
function merge_array(array1, array2) {
    "use strict";
    var result_array = [];
    var arr = array1.concat(array2);
    var len = arr.length;
    var assoc = {};
    var item1;
    while (len--) {
        item1 = arr[len];
        if (!assoc[item1]) {
            result_array.unshift(item1);
            assoc[item1] = true;
        }
    }
    return result_array;
}
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));

//14. Write a JavaScript function to remove a specific element from an array
function remove_array_element(array, n) {
    "use strict";
    var index = array.indexOf(n);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}
console.log(remove_array_element([2, 5, 9, 6], 5));

//15. Write a JavaScript function to get a random item from an array
function random_item(items) {
    "use strict";
    return items[Math.floor(Math.random() * items.length)];
}
var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));

//16. Write a JavaScript function to move an array element from one position to another
function move(arr, old_index, new_index) {
    "use strict";
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
}
console.log(move([10, 20, 30, 40, 50], 0, 2));

//17. Write a JavaScript function to get difference between two dates in days
var date_diff_indays = function (date1, date2) {
    "use strict";
    var dt1 = new Date(date1);
    var dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
};
console.log(date_diff_indays('05/16/2016', '06/16/2016'));

//18. Write a JavaScript function to get the maximum date from an array of dates
//    Test Data :
//    console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));
//    Output :
//    "2015/02/02"
function max_date(all_dates) {
    "use strict";
    var max_dt = all_dates[0];
    var max_dtObj = new Date(all_dates[0]);
    all_dates.forEach(function (dt) {
        if (new Date(dt) > max_dtObj) {
            max_dt = dt;
            max_dtObj = new Date(dt);
        }
    });
    return max_dt;
}
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));

//19. Write a JavaScript function to split a string and convert it into an array of words
var string_to_array = function (str) {
    "use strict";
    return str.trim().split(" ");
};
console.log(string_to_array("HTML JavaScript"));

//20. Write a JavaScript function to capitalize the first letter of a string
var capitalize = function (str1) {
    "use strict";
    return str1.charAt(0).toUpperCase() + str1.slice(1);
};
console.log(capitalize('javaScript'));
 
//21. Write a JavaScript function to convert a string into camel case
//    Test Data :
//    console.log(camelize("Java Script"));
//    console.log(camelize("java-script"));
//    console.log(camelize("Java Script Exercises"));
//    "JavaScript"
//    "javaScript"
//    "JavaScriptExercises"
function camelize(str) {
    "use strict";
    return str.replace(/\W+(.)/g, function (match, chr) {
        return chr.toUpperCase();
    });
}
console.log(camelize("Java Script"));
console.log(camelize("java-script"));
console.log(camelize("Java Script Exercises"));

//22. Write a JavaScript function to find the highest value in an array
function max(array) {
    "use strict";
    return Math.max.apply(null, array);
}
console.log(max([12, 34, 56, 1]));
console.log(max([-12, -34, 0, -56, -1]));

//23. Write a JavaScript function to find the lowest value in an array
function min(array) {
    "use strict";
    return Math.min.apply(null, array);
}
console.log(min([12, 34, 56, 1]));
console.log(min([-12, -34, 0, -56, -1]));

//24. Write a JavaScript function to check to check whether a variable is numeric or not
function is_Numeric(num) {
    "use strict";
    return !isNaN(parseFloat(num)) && isFinite(num);
}
console.log(is_Numeric(23));
console.log(is_Numeric(-23));
console.log(is_Numeric(1.20));
console.log(is_Numeric('abcd'));
console.log(is_Numeric('100'));
console.log(is_Numeric(' '));

//25. Write a JavaScript function to calculate the sum of values in an array
function sum(arr) {
    "use strict";
    var sum1 = 0;
    var i3;
    for (i3 = 0; i3 < arr.length; i3 += 1) {
        sum1 += arr[i3];
    }
    return sum1;
}
console.log(sum([1, 2, 3]));
console.log(sum([100, -200, 3]));

//26. Write a JavaScript program to get the length of a JavaScript object
Object.objsize = function (Myobj) {
    "use strict";
    var osize = 0;
    var key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) {
            osize += 1;
        }
    }
    return osize;
};
var student = {
    name: "Kuzmina Ekaterina",
    group: "3208",
    age: 22
};
var objsize = Object.objsize(student);
alert('Size of the current object : ' + objsize);

//27. Write a JavaScript program to list the properties of a JavaScript object
function getProperties(obj) {
    "use strict";
    var keys = [];
    var key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}
var student1 = {name: "Kuzmina Ekaterina", group: "3208", age: "22"};
console.log(getProperties(student1));