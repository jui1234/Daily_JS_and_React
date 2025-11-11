// const array=[1,6,9,3,5];

const smallAndLargestNumber=(arr)=>{
    let smallestNum=arr[0];
    let longestNum=arr[0];
    
    if(arr.length===0) return null;
    
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>longestNum ){
            longestNum=arr[i];
        }
        else if(arr[i]<smallestNum){
            smallestNum=arr[i]
        }
    }
    return {smallestNum:smallestNum,longestNum:longestNum}
}

console.log("smallAndLargestNumber",smallAndLargestNumber([1,6,9,3,5]))

export default smallAndLargestNumber;