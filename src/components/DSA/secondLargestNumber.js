const secondLargestNumber=(arr)=>{
    const sortedarray=arr.sort((a,b)=>a-b);
    return arr[sortedarray.length-2];
}

console.log("secondLargestNumber",secondLargestNumber([1,6,4,9,8,3]))

const secondLargestNumberarray=(arr)=>{
    for(i=0;i<=arr.length-1;i++){
        for(j=i+1;j<=arr.length;j++){
            if(arr[i]>arr[j]){
                let store=arr[i];
                arr[i]=arr[j];
                arr[j]=store;
            }
        }
    }
    return arr[arr.length-2];
}

console.log("secondLargestNumberarray",secondLargestNumberarray([1,6,4,9,8,10,3]))

export default {secondLargestNumber,secondLargestNumberarray};