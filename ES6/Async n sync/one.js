let calc=(a,b,op)=>{     //using sum and multi as a srt argument
    if (op==="sum"){
        return a+b;
    }
    if (op==="multi"){
        return a*b;
    }
}
let R1=calc(10,20,"sum")
console.log(R1)
let R2=calc(10,20,"multi")
console.log(R2)