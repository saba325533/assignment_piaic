// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magician_name = ['Herry Porter', 'David Copperfield', 'David Blaine', 'criss Angel'];
function show_magicians() {
    for (var _i = 0, magician_name_1 = magician_name; _i < magician_name_1.length; _i++) {
        var magician = magician_name_1[_i];
        console.log(magician);
    }
}
var greet_magician = function () {
    for (var _i = 0, magician_name_2 = magician_name; _i < magician_name_2.length; _i++) {
        var index = magician_name_2[_i];
        index = "Hello ".concat(index);
        console.log(index);
    }
};
show_magicians();
greet_magician();
