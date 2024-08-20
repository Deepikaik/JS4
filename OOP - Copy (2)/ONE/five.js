class Account{
    acc_bal=0;
    min_bal=500;
    deposit_Amount(amount){
        this.acc_bal=this.acc_bal+amount 
    }
    withdraw_Amount(amount){
        this.acc_bal=this.acc_bal-amount 
    }
    get_Bal(){
       return this.acc_bal-this.min_bal
    }
}
let a1=new Account()        //multiple objects
a1.deposit_Amount(5000)
a1.deposit_Amount(150)
a1.withdraw_Amount(50)

console.log(a1)
console.log(a1.get_Bal())


let a2=new Account()
a2.deposit_Amount(6000)
a2.deposit_Amount(3000)
a2.withdraw_Amount(200)

console.log(a2)
console.log(a2.get_Bal())



let a3=new Account()
a3.deposit_Amount(25000)
a3.deposit_Amount(1500)
a3.withdraw_Amount(500)

console.log(a3)
console.log(a3.get_Bal())