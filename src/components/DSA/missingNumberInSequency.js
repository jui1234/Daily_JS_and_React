const FindMissingNumber=(arr)=>{
    let storearray=arr.sort((a,b)=>a-b);
    let missingnumber=null;
    for(let i=0;i<storearray.length-1;i++){
       if(storearray[i]+1 !== storearray[i+1]){
           missingnumber=storearray[i]+1;
       }
    }
    return missingnumber;
}

console.log(FindMissingNumber([1,3,5,2,6]))

export default FindMissingNumber;