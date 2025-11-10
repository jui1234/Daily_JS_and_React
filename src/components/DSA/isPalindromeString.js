const isPlaindromeString=((str)=>{
    const convertStringToLowerCase=str.toLowerCase();
    let left=0;
    let right=convertStringToLowerCase.length-1;

    while(left<right){
        if(convertStringToLowerCase[left]!==convertStringToLowerCase[right]){
            return false;
        }
        left ++;
        right --;
    }
    return true;
})

export default isPlaindromeString;