//create a new array with even nos
let numbers=[1,2,3,4,5,6,7,8,9,10]
/*let even_nos=[]
for (num of numbers){
    if (num%2===0){
        even_nos.push(num);
    }
    
}
console.log(even_nos)*/

let even_nos=numbers.filter((num)=>{
    return num%2===0
})
console.log(even_nos)




