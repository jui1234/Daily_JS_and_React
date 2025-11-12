const sumOfAllElements=(arr)=>{
    let storeSum=null;
 arr.forEach((item,index)=>{
     storeSum+=item;
 })
 return storeSum;
}

console.log("result",sumOfAllElements([1,2,3,4,5]))

export default sumOfAllElements;
