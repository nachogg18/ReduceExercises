//Turn an array of numbers into a total of all the numbers

function total(arr) {
    return arr.reduce((acc,curr) => acc + curr)
 }
 
 console.log(total([1,2,3])); // 6