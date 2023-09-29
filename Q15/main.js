// You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guest_arr = ['saba', 'sana', 'Ahmed', 'hafsa'];
var cant_attend = 'Ahmed';
console.log(cant_attend + " " + "can not make it for dinner");
var new_guest = 'shumaila';
guest_arr[guest_arr.indexOf(cant_attend)] = new_guest;
console.log(guest_arr);
for (var i in guest_arr) {
    console.log("".concat(guest_arr[i], " you are invited for dinner"));
}
