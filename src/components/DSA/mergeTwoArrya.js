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

const mergeTwoSortedArrya=(arr1,arr2)=>{
  const mergeArray=[...arr1,...arr2];
  return mergeArray.sort((a,b)=>a-b);
//   return mergeArray;
}

console.log(mergeTwoSortedArrya([1, 3, 5, 7],[2, 4, 6, 8]))

export default {mergerTwoArray,mergeTwoSortedArrya};