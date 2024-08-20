class Account{
    acc_Id;
    acc_name;
    constructor(id,name){
        this.acc_Id=id;
        this.acc_name=name;
    }
}
class SA extends Account{
    acc_bal=0;
    min_bal=500
    constructor(i,n,amount){
        super()
        this.acc_bal=amount
    }                

}
let SA1=new SA(101,"rahul",5000)
console.log(SA1)