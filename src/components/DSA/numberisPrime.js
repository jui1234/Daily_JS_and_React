const isPrime=((n)=>{
    if(n<=1)return false;
    for(i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
})

console.log("isPrime",isPrime(18))

export default isPrime;