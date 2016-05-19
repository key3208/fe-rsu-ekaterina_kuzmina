var library = [
    {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
var result = 0;
var student = {
    name: "Kuzmina Ekaterina",
    group: "3208",
    age: 22
};

var modul = (function () {
    "use strict";

    function forRemoveDuplicatesFromArray(originArray, NoDupArray) {
        var flag;
        var i;
        var j;
        for (i = 0; i < originArray.length; i += 1) {
            flag = false;
            for (j = 0; j < NoDupArray.length; j += 1) {
                if (originArray[i].toLowerCase() === NoDupArray[j].toLowerCase()) {
                    flag = true;
                    break;
                }
            }
            if (flag === false) {
                NoDupArray.push(originArray[i]);
            }
        }
        return NoDupArray;
    }

    function forMerge_array(array) {
        var result_array = array;
        var i;
        var j;
        for (i = 0; i < result_array.length; i += 1) {
            for (j = i + 1; j < result_array.length; j += 1) {
                if (result_array[i] === result_array[j]) {
                    result_array.splice(j--, 1);
                }
            }
        }
        return result_array;
    }

    Array.prototype.forMove = function (old_index, new_index) {
        while (old_index < 0) {
            old_index += this.length;
        }
        while (new_index < 0) {
            new_index += this.length;
        }
        if (new_index >= this.length) {
            var k = new_index - this.length;
            while ((k--) + 1) {
                this.push(undefined);
            }
        }
        this.splice(new_index, 0, this.splice(old_index, 1)[0]);
        return this;
    };

    function test(number) {

        switch (number) {
        case 1:
            //1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
            //   Test Data :
            //   console.log(is_array(qwe));
            //   console.log(is_array([1, 2, 4, 0]));
            //   false
            //   true
            return function is_array(value) {
                return value.constructor === Array;
            };

        case 2:
            //2. Write a JavaScript function to deep clone an array using recursion
            return function arrayClone(arr) {
                var copy = [];
                var i;
                if (Array.isArray(arr)) {
                    copy = arr.slice(0);
                    for (i = 0; i < copy.length; i += 1) {
                        copy[i] = arrayClone(copy[i]);
                    }
                    return copy;
                } else if (typeof arr === 'object') {
                    throw 'Cannot clone array containing an object!';
                } else {
                    return arr;
                }
            };

        case 3:
            //3. Write a JavaScript function to find the most frequent item of an array.
            return function mostFrequentItem(arr1) {
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
                return item;
            };

        case 4:
            //4. Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)
            return function removeDuplicatesFromArray(originArray) {
                var NoDupArray = [];
                return forRemoveDuplicatesFromArray(originArray, NoDupArray);
            };

        case 5:
            //5. Write a JavaScript program to shuffle an array
            return function shuffle(arra1) {
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
            };

        case 6:
            //6. Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method
            //   var library = [
            //            { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
            //            { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
            //            { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
            //   ];
            return function compare_to_sort(x, y) {
                if (x.title < y.title) {
                    return -1;
                }
                if (x.title > y.title) {
                    return 1;
                }
                return 0;
            };

        case 7:
            //7. Write a JavaScript function to merge two arrays and removes all duplicates elements
            return function merge_array(array1, array2) {
                var arr = array1.concat(array2);
                return forMerge_array(arr);
            };

        case 8:
            //8. Write a JavaScript function to remove a specific element from an array
            return function remove_array_element(array, n) {
                var index = array.indexOf(n);
                if (index > -1) {
                    array.splice(index, 1);
                }
                return array;
            };

        case 9:
            //9. Write a JavaScript function to get a random item from an array
            return function random_item(items) {
                return items[Math.floor(Math.random() * items.length)];
            };

        case 10:
            //10. Write a JavaScript function to move an array element from one position to another
            return function move(array) {
                return array.forMove(0, 2);
            };

        case 11:
            //11. Write a JavaScript function to split a string and convert it into an array of words
            return function string_to_array(str) {
                return str.trim().split(" ");
            };

        case 12:
            //12. Write a JavaScript function to capitalize the first letter of a string
            return function capitalize(str1) {
                return str1.charAt(0).toUpperCase() + str1.slice(1);
            };

        case 13:
            //13. Write a JavaScript function to convert a string into camel case
            //    Test Data :
            //    console.log(camelize("Java Script"));
            //    console.log(camelize("java-script"));
            //    console.log(camelize("Java Script Exercises"));
            //    "JavaScript"
            //    "javaScript"
            //    "JavaScriptExercises"
            return function camelize(str) {
                return str.replace(/\W+(.)/g, function (match, chr) {
                    return chr.toUpperCase();
                });
            };

        case 14:
            //14. Write a JavaScript function that accepts two arguments: array and function. The function iterate the
            //entire array and calls the given function with the current array element.
            //function iterateArray(array, callback){
                //... Your code
            //}

            //var result = 0;
            //iterateArray([2,4,1,2,4], function(el){
            //    result += el;
            //});
            //Now result is the sum of all array elements
            return function iterateArray(array, callback) {
                var i;
                var sum = 0;
                if (array.constructor === Array) {
                    for (i = 0; i < array.length; i += 1) {
                        sum += array[i];
                    }
                    if (typeof callback === "function") {
                        callback(sum);
                    }
                }
            };

        case 15:
            //15. Write a JavaScript program to get the length of an JavaScript object
            return function objsize(Myobj) {
                var osize = 0;
                var key;
                for (key in Myobj) {
                    if (Myobj.hasOwnProperty(key)) {
                        osize += 1;
                    }
                }
                return osize;
            };
        default:
            console.log('end');
        }
    }

    return {
        test: test
    };

}());

var check = modul.test(1);
var deep = modul.test(2);
var frequent = modul.test(3);
var remdup = modul.test(4);
var shuffle = modul.test(5);
var sort = modul.test(6);
var merge = modul.test(7);
var remspec = modul.test(8);
var random = modul.test(9);
var move = modul.test(10);
var split = modul.test(11);
var capitalize = modul.test(12);
var camelcase = modul.test(13);
var iterate = modul.test(14);
var lengthobj = modul.test(15);

console.log(check('qwe'));
console.log(check([1, 2, 4, 0]));

console.log(deep([1, 2, 4, 0]));
console.log(deep([1, 2, [4, 0]]));
console.log(deep([[1, 3, 4], [5, 6, 7]]));

console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

console.log(remdup(['111', '2', '45', '8888', 'Moais', 'hello', 'ANOTHER', 'Cat', '111', 'another', 'moais', 'cat', '8888']));

console.log(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log(library.sort(sort));

console.log(merge([1, 2, 3], [2, 30, 1]));

console.log(remspec([2, 5, 9, 6], 5));

console.log(random([254, 45, 212, 365, 2543]));

console.log(move([10, 20, 30, 40, 50]));

console.log(split("HTML JavaScript"));

console.log(capitalize('javaScript'));

console.log(camelcase("Java Script"));
console.log(camelcase("java-script"));
console.log(camelcase("Java Script Exercises"));

iterate([2, 4, 1, 2, 4], function (el) {
    "use strict";
    result += el;
    console.log(result);
});

console.log('Size of the current object : ' + lengthobj(student));