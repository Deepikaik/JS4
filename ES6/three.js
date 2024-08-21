//foreach needs a fatarrow fnc
let eids=[10,20,30,40,50]
eids.forEach((ele)=>{   //foreach to only iterate hence new array is undefined
    console.log(ele)
})

eids.map((ele)=>{        //map to iterate and create new array
    console.log(ele)
})

eids.reduce((ele)=>{       //reduced into one element
    console.log(ele)
})

eids.filter((ele)=>{       //to filter the element from the array
    console.log(ele)
})

eids.find((ele)=>{          // find used to find the element from the array
    console.log(ele)
})