function checkforlogeststring(str){
 let currentword="";
 let longestword="";
 for(let i=0;i<=str.length;i++){
     if(str[i]===" "|| i===str.length){
         if(currentword.length>longestword.length){
             longestword=currentword;
         }
         currentword="";
     }
     currentword+=str[i];
 }
 return longestword;
}
 console.log("checkforlogeststring",checkforlogeststring("hello i am jui works"))

 export default checkforlogeststring;