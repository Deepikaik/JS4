let sum=(a,b)=>{  //using sum and multi as fnc
    return a+b;
}
let multi=(a,b)=>{
    return a*b;
}
let calc=(a,b,callback)=>{           //callback is used to pass a fnc as an argument
    return callback(a,b)
}
let R1=calc(10,20,sum)
console.log(R1)
let R2=calc(10,20,multi)
console.log(R2)