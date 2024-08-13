class Account{
    acc_bal=0;                    //property
    deposit_Amount(amount){           //method(parameter)        
        this.acc_bal=this.acc_bal+amount // 'this' is  a pointer to access inside class/pointer pointing to current obj
    //console.log(amount)
    }
}
let a1=new Account()
a1.deposit_Amount(5000)
console.log(a1)

let a2=new Account()
a2.deposit_Amount(15000)
console.log(a2)