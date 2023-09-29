// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magician_name:string[]=['Herry Porter','David Copperfield','David Blaine','criss Angel']
function show_magicians(){
     
    for(let magician of magician_name)
    {
        console.log(magician);
        
    }
}
let greet_magician=()=>
{
    for(let index of magician_name)
    {
        index= `Hello ${index}`
        console.log(index);
        
    }
}
show_magicians()
greet_magician()
