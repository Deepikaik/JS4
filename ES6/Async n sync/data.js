let employees=[{id:101,name:"Rahul",sal:45000.00},
    {id:102,name:"Sonia",sal:55000.00}]

let createEmployee=(emp)=>{
    setTimeout(()=>{
        employees.push=(emp);
    },4000)
}

let getEmployee=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
            rows=rows+`<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.sal}</td>
            </tr>`
        }
        document.getElementById("abc").innerHTML=rows
    },1000)
}
createEmployee({id:103,name:"Priya",sal:50000})
getEmployee()