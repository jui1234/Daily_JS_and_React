const IntersectioninArray=(arr1,arr2)=>{
    let storeIntr=[];
    for(let i=0;i<=arr1.length;i++){
        for(let j=0;j<=arr2.length-1;j++){
         if(arr1[i]===arr2[j]){
             storeIntr.push(arr2[j])
         }
        }
    }
    return storeIntr;
}

console.log("IntersectioninArray",IntersectioninArray([1,2,3,6,4,5],[3,4,5,6]))

export default IntersectioninArray;