class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(Id,name,amount){
        this.acc_Id=Id
        this.acc_Name=name
        this.acc_Bal=amount
    }
}
let a1=new Account(101,'Rahul',45000)
let a2=new Account(102,'Sonia',55000)
let a3=new Account(103,'Modi',66000)
console.log(a1)
console.log(a2)
console.log(a3)