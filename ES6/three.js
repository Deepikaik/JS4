//foreach needs a fatarrow fnc
let eids=[10,20,30,40,50]
eids.forEach((ele)=>{   //to only iterate hence new array ois undefined
    console.log(ele)
})

eids.map((ele)=>{        //to iterate and create new array
    console.log(ele)
})

eids.reduce((ele)=>{       //reduced into one element
    console.log(ele)
})

eids.filter((ele)=>{
    console.log(ele)
})

eids.find((ele)=>{
    console.log(ele)
})