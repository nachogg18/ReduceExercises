var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   return arr.reduce((acc,curr)=>{
       if (curr['age']<30) {
           acc['youth'] +=1 
           if (curr['voted']) {
               acc['youngVotes'] += 1
           }
           
       }
       else {
        if (curr['age']>=30 && curr['age']<33) {
                acc['mids'] +=1 
                if (curr['voted']) {
                    acc['midVotes'] += 1
                }   
            }
        else {
                if (curr['age']>=33) {
                    acc['olds'] +=1 
                    if (curr['voted']) {
                        acc['oldVotes'] += 1
                    }
                }
            }    
            
        }
        return acc
},{youngVotes: 0,youth: 0,midVotes: 0, mids: 0,oldVotes: 0,olds: 0 })
}
console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  
  olds: 4 
}
*/