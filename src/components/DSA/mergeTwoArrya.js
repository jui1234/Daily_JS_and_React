function mergerTwoArray(arr1,arr2){
    const mergeArray=[...arr1,...arr2]
    
    //  return [...arr1,...arr2].sort((a,b)=>a-b)
    
    for(let i=0;i<mergeArray.length;i++){
        for(let j=0;j<mergeArray.length-i-1;j++){
            if(mergeArray[j]>mergeArray[j+1]){
                 let temp=mergeArray[j];
            mergeArray[j]=mergeArray[j+1];
            mergeArray[j+1]=temp;
            }
           
        }
    }
    
    return mergeArray;
    
}

console.log("result",mergerTwoArray([1,2,3,4],[3,4,2,6]))

export default {mergerTwoArray}