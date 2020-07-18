function stringConcat(arr) {
    return arr.reduce((concat,letter) => concat.concat(letter),'')
}
 
 console.log(stringConcat([1,2,3])); // "123"