// Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.
var magician_name = ["Herry porter", 'David copperfield', 'David Blaine', 'criss Angel'];
function show_magician(magician_name) {
    for (var _i = 0, magician_name_1 = magician_name; _i < magician_name_1.length; _i++) {
        var magician = magician_name_1[_i];
        console.log(magician);
    }
}
show_magician(magician_name);
