const nuberBefore=(num)=>{
  let store=Math.floor(Math.abs(num));
  let count=0;
  if(store===0)return 1; 
  while(store>0){
      count++;
      store=Math.floor(store/10);
  }
  return count;
}


const numberAfter=(num)=>{
    let store=Math.abs(num);
    count=0;
    while(!Number.isInteger(store)){
        store=store*10;
        count++;
    if(count>15)break;
    }
      return count;
}

const getTheTotalCountOdDigit=((num)=>{
    return {before:nuberBefore(num),after:numberAfter(num)};
    
})
console.log("result",getTheTotalCountOdDigit(2254.56))