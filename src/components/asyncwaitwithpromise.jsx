async function doubleCount(count){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof count !== "number"){
                reject("It is not a number")
            }else{
                resolve(count*2);
            }
        },1000)
        
    }).then((result)=>{
        console.log("result",result);
        return result;
    }).catch((err)=>{
        console.log("error",error)
    })
}

const result= async()=>{
    let ans= await doubleCount(2);
    return ans;
}

result().then((val)=>{console.log("final Result",val)})