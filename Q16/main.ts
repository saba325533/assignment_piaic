
let guest_arr=['saba','sana','ahmed','shumaila']
console.log("we found a bigger dinner table")
let first_guest= guest_arr.unshift("hafsa")
console.log(guest_arr)
let last_guest=guest_arr.push('kashif')
console.log(guest_arr)
let middle_guest=guest_arr.splice(2,0,'anabia')
console.log(guest_arr)
for(let i in guest_arr){
    console.log(`${guest_arr[i]} you are invited for dinner`)
}

