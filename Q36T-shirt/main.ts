// -Shirt: Write a function called make_shirt() that accepts a size and the text of 
// a message that should be printed on the shirt. The function should print a sentence 
// summarizing the size of the shirt and the message printed on it. 
// Call the function.

const make_shirt=(size:string,msg:string):void =>

{
    console.log(`size: ${size} message: ${msg}`)
}
make_shirt('small','learn Type script')
make_shirt('medium','learn java script')
make_shirt('large','learn python')

