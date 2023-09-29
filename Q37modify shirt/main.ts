// Large Shirts: Modify the make_shirt() function so that shirts are large by default 
// with a message that reads I love TypeScript. Make a large shirt and a medium shirt 
// with the default message, and a shirt of any size with a different message.

function make_shirt(size:string="large",msg:string='i love java script'):void{
    
    console.log(`size: ${size} message: ${msg}`)
}
//large shirtwith default msg
make_shirt()
//medium shirtwith default msg
make_shirt("Medium")
make_shirt('small','i love python')
