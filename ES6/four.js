let enames=["Rahul","sonia","Priya"];
/*let new_Enames=enames.map((ename)=>{             //map will make a new array
    return ename
})
console.log(new_Enames)

/*let new_Enames=enames.forEach((ename)=>{          //foreach will show undefined
    return ename
})
console.log(new_Enames)*/

let new_Enames=enames.filter((ename)=>{             //filter
    return ename
})
console.log(new_Enames)