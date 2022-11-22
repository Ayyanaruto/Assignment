const newStringofNums = "1,3,545,6767,8,9-9,9994_33$$33,33!334";
// We need a sum of all the numbers


/*Creating an array  with replace method to remove special char except numbers and comma 
and then spliting the string into array using commas */ 

let array=newStringofNums.replace(/[^0-9,]/g,"").split(",")

//Using a recursive function sum() to add all the numbers
function sum(arr){
    let add=0
    if(arr.length<=0) return 0
    add=parseInt(arr[0])+sum(arr.slice(1))
    return add
}
let total=sum(array)
console.log(total)