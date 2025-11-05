const compareTwoStrings = (str1, str2) => {
    let result = '';
    for(let i=0;i<Math.min(str1.length, str2.length);i++){
        if(str1[i]===str2[i])break;
        result+=str1[i];
    }
    return result;
}

const LongestCommonPrefix =(strs)=>{
    if(strs.length===0)return "";
    let prefix=strs[0];
    let i=0;
    for(let i=1;i<strs.length;i++){
        prefix=compareTwoStrings(prefix,strs[i])
        if(prefix==="")return "";
    }
return prefix;

}

console.log(LongestCommonPrefix(["flower","flow","flight"])); //"fl"
console.log(LongestCommonPrefix(["dog","racecar","car"])); //""
export{LongestCommonPrefix}