// Animals: Think of at least three different animals that have a common 
// characteristic. Store the names of these animals in a list, and then use a for loop
//  to print out the name of each animal. • Modify your program to print a statement 
//  about each animal, such as A dog would make a great pet. • Add a line at the end 
//  of your program stating what these animals have in common. You could print 
//  a sentence such as Any of these animals 
// would make a great pet!

let animals:string[]=['cat','dog','goat']
console.log('list of animals')
for(let i of animals)
{
    console.log( i);    
}
//print a statement about each animal
for(let animal of animals)
{
    if( animal=='dog')
{
    console.log(`A ${animal} is a good pet animal`)

}
else if(animal=='cat')
{
    console.log(`A${animal} is a pet animal and a good companion`);
}
else if(animal=='goat'){
    console.log(`A${animal} isa dorable animal and gives milk`);

}
            
}
console.log('any of these animals would make great pet');

