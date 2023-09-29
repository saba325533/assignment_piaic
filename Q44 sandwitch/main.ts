// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwitch_items(...items:string[]){
    console.log('summary of sandwitch')
    if(items.length===0)
    {
        console.log("you have a empty sanwitch summary");
        
    }
    else{
        items.forEach((item:string,index:number)=>{
            console.log(`${index +1} ${item}`)
            
        })
    }
}
console.log('/n');

sandwitch_items('lettuce','Tomato','Mayoneese')
sandwitch_items('Ham','cheese')
sandwitch_items('tomato','peanut butter','jelly','chicken')