const rotate=(arr)=>{
    let storearray=[];
    for(let i=arr.length-1;i>=0;i--){
        storearray.push(arr[i]);
    }
    return storearray;
}

function rotatearray (arr,k){
    let storearray=arr.slice(0,k);
    
    let storearrayrotate=(rotate(storearray))
    for(let i=k;i<=arr.length-1;i++){
        storearrayrotate.push(arr[i])
    }
    
    
    return storearrayrotate;
}

console.log("rotatearray",rotatearray([1,2,3,4,5],2))
// console.log("rotatearraycheck",rotate([1,2,3,4,5]))

export default rotatearray;