// Large Shirts: Modify the make_shirt() function so that shirts are large by default 
// with a message that reads I love TypeScript. Make a large shirt and a medium shirt 
// with the default message, and a shirt of any size with a different message.
function make_shirt(size, msg) {
    if (size === void 0) { size = "large"; }
    if (msg === void 0) { msg = 'i love java script'; }
    console.log("size: ".concat(size, " message: ").concat(msg));
}
//large shirtwith default msg
make_shirt();
//medium shirtwith default msg
make_shirt("Medium");
make_shirt('small', 'i love python');
