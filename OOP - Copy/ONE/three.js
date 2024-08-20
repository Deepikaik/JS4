class Account{
    acc_bal=0;                  //property
    open_Account(){                              //method
        console.log('Account is opened')
    }
    deposit_Amount(){
        console.log("Amount deposited")
    }
    withdrawl(){
        console.log("Insufficient balance")
    }
    get_Bal(){
        console.log("server busy")
    }
    get_st(){
        console.log("pay 50 INR")
    }
    close_Account(){
        console.log("balance negative")
    }
}
let a1=new Account();                 //to refer to class variable object is used outside the block
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_Bal()
a1.get_st()
a1.close_Account()