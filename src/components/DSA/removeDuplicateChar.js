const uniqueChar=(str)=>{
    let unique={};
    let conver=str.toLowerCase();
    for(let i=0;i<=conver.length-1;i++){
    if(!unique[conver[i]]){
        unique[conver[i]]=true;
    }
    }
    
    return Object.keys(unique).join("");
}

console.log("uniqueChar",uniqueChar("Srtringstr"))

export default uniqueChar;