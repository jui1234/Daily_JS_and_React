const allZeroToEnd=(arr)=>{
    const storeArray=new Array(arr.length).fill(0);
    let j=0;
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]!==0){
            storeArray[j]=arr[i];
            j++;
        }
    }
    return storeArray;
}

console.log(allZeroToEnd([1,0,2,3,0,4,]))

export default allZeroToEnd;