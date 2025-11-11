const removeDuplicate=(arr)=>{
    const unique={};
    
    for(let i=0;i<=arr.length-1;i++){
        if(!unique[arr[i]]){
            unique[arr[i]]=true;
        }
    }
    return Object.keys(unique).map(Number);
}

console.log("removeDuplicate",removeDuplicate([1,2,3,2,3,4]))

export default removeDuplicate;