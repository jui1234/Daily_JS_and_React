export  function isPalindrome(number) {
    const convertumbertostring =number.toString();
    for(let i=0;i<convertumbertostring.length/2;i++){
        let start=convertumbertostring[i];
        let end=convertumbertostring[convertumbertostring.length-1-i];
        if(start!==end){
            return false;
        }
        return true;
    }
}

export function isPalindromeWithoutConvertingToSTring(number){
    if(number<0)return false;

    let orignal=number;
    let reversed=0;
    while(number>0){
        let lastdigit=number%10;//this gives us the last digit 
        let reversed=reversed*10+lastdigit;// this will give us the reversed number 
        let newnumber=Math.floor(number/10);// this will give us the number after removing the last digit 
    }

    return orignal===reversed;
}

export {isPalindromeWithoutConvertingToSTring,isPalindrome};