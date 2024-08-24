let goToGoa=(success,failure)=>{
    let acc_bal=5000;
    if(acc_bal>=10000){
        success('go and enjoy')
    }
    else{
        failure('go home')
    }
}
goToGoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})