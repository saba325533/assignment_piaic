// Animals: Think of at least three different animals that have a common 
// characteristic. Store the names of these animals in a list, and then use a for loop
//  to print out the name of each animal. • Modify your program to print a statement 
//  about each animal, such as A dog would make a great pet. • Add a line at the end 
//  of your program stating what these animals have in common. You could print 
//  a sentence such as Any of these animals 
// would make a great pet!
var animals = ['cat', 'dog', 'goat'];
console.log('list of animals');
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var i = animals_1[_i];
    console.log(i);
}
//print a statement about each animal
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    if (animal == 'dog') {
        console.log("A ".concat(animal, " is a good pet animal"));
    }
    else if (animal == 'cat') {
        console.log("A".concat(animal, " is a pet animal and a good companion"));
    }
    else if (animal == 'goat') {
        console.log("A".concat(animal, " isa dorable animal and gives milk"));
    }
}
console.log('any of these animals would make great pet');
