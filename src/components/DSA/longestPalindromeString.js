const ifPalidrome=((str)=>{
    let left=0;
    let right=str.length-1;
    
    while(left<right){
        if(str[left]!==str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
})

// const longestPalindrome=((str)=>{
//     let left=0;
//     let right=str.length;
    
//     let longestword="";
    
//     let currentword="";
    
//     while(left<right){
//         currentword=str.slice(left,right)
//         if(ifPalidrome(currentword)){
//             if(longestword.length<currentword.length){
//                 longestword=currentword;
//             }
//         }
//         left++;
//         right--;
//     }
//     return longestword
// })


const longestPlaindrome=((str)=>{
    let longestword="";
    for(i=0;i<str.length;i++){
        for(j=0;j<=str.length;j++){
            let currentword=str.slice(i,j);
            if(ifPalidrome(currentword) && currentword.length>longestword.length){
                longestword=currentword;
            }
        }
    }
    return longestword;
})

console.log("longestString",longestPlaindrome("abbad"))

export default longestPlaindrome;