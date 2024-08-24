let array=[1,2,3,4,5,6,7,8,9,10]
let even=[]
let odd=[]

for(i=1;i<=array.length-1;i++){
    if(i%2===0){
        even.push(i)
    }
    if(i%2===1){
        odd.push(i)
    }
}
console.log(even)
console.log(odd)