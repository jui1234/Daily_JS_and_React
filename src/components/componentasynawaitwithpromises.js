const inputarray=[1,2,3,4,5,6];
let resulttotalsum=0;
async function doublenumber(){
  
    
         for(let i=0;i<inputarray.length;i++){
              await new Promise(resolve=>setTimeout(resolve,1000))
        resulttotalsum+=inputarray[i]*2;
    }
   
   return resulttotalsum;
    
}

export default async function  doublenumberresult(){
    const result=await doublenumber();
    return result;
}

console.log("doublenumberresult",doublenumberresult().then(result=>console.log("doublenumberresult",result)))
