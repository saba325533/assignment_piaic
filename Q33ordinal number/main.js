// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or
//  2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each n
// umber. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each 
// result should be on a separate line.
var number_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, number_arr_1 = number_arr; _i < number_arr_1.length; _i++) {
    var i = number_arr_1[_i];
    var ordinal = void 0;
    if (i == 1) {
        ordinal = 'st';
    }
    else if (i === 2) {
        ordinal = 'nd';
    }
    else if (i == 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log("".concat(i).concat(ordinal));
}
