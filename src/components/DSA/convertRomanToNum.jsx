function ConvertRomanToNum(roman){
    const romanNumber=(char)=>{
        switch(char){
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0;
        }
    }

    let Total=0;
    for(let i=0;i<roman.length;i++){
        const currentval=romanNumber(roman[i]);
        const nextval=romanNumber(roman[i+1]);
        if(currentval<nextval){
            Total-=currentval;
         }else{
            Total+=currentval;
         }
    }
    return Total;
}

function ConvertRomanToNUmberUsingObject(roman){
    const romanObj={
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000    
    }

    let Total=0;
    for(let i=0;i<roman.length;i++){
        const currval=romanObj[roman[i]];
        const nextval=romanObj[roman[i+1]];
        if(currval<nextval){
            Total-=currval;
        }else{
            Total+=currval;
        }
    }
    return Total;

}

console.log(ConvertRomanToNum("MCMXCIV")); //1994