class Account{
    acc_Id;
    acc_Name;
    acc_Minbal=500;
    acc_Bal;
    constructor(Id,Name,Amount){
        this.acc_Id=Id
        this.acc_Name=Name
        this.acc_Bal=Amount
    }
    open_Account(){
        console.log("Account is opened successfully")
    }
    deposit_Amount(){
        this.acc_Bal=this.acc_Bal+Amount
    }
    withdraw_Amount(){
        this.acc_Bal=this.acc_Bal-Amount
    }
    get_Bal(){
        return this.acc_Bal=this.acc_Bal-this.acc_Minbal
    }
    close_Account(){
        console.log("Account is closed successfully")
    }
}
let a1=new Account()