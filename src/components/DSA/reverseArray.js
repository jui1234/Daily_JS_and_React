const reverseArray=(arr)=>{
    let reverseArray=[];
    for(let i=arr.length-1;i>=0;i--){
        reverseArray.push(arr[i])
    }
    return reverseArray;
}

console.log("reverseArray",reverseArray([1,3,5,7,9]))