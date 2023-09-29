var guest_arr = ['saba', 'sana', 'ahmed', 'shumaila'];
console.log("we found a bigger dinner table");
var first_guest = guest_arr.unshift("hafsa");
console.log(guest_arr);
var last_guest = guest_arr.push('kashif');
console.log(guest_arr);
var middle_guest = guest_arr.splice(2, 0, 'anabia');
console.log(guest_arr);
for (var i in guest_arr) {
    console.log("".concat(guest_arr[i], " you are invited for dinner"));
}
