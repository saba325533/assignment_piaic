// Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.

let magician_name:string[]=["Herry porter",'David copperfield','David Blaine','criss Angel']
function show_magician(magician_name:string[]){
    for(var magician of magician_name)
    {
        console.log(magician);
        
    }
}

show_magician(magician_name)