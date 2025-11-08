function startcon(n){
for(let i=0;i<n;i+=2){
    let space=' '.repeat(i/2);
    let start='*'.repeat(n-i);
    
    console.log(space+start)
}
}

startcon(7)

// *******
//  *****
//   ***
//    *

function startpattern(n){
 let i=0;
 while(i<=n){
     let start='*'.repeat(i)
     console.log(start)
     i++;
 }
 
 while(i>=0){
     let start="*".repeat(i);
     console.log(start)
     i--;
 }
}

startpattern(5);

// *
// **
// ***
// ****
// *****
// ******
// *****
// ****
// ***
// **
// *

function startbigstrong(n){
    for(i=0;i<=n;i+=2){
        let space="";
        let star="";
        
        for(k=0;k<=(n-i)/2;k++){
            space+='_'
        }
       
        for(let j=0;j<i+1;j++){
        star+="*";
        }
        
       console.log(space+star);
    }
     for(i=n-2;i>=0;i-=2){
        let space="";
        let star="";
        
        for(k=0;k<=(n-i)/2;k++){
            space+='_'
        }
       
        for(let j=0;j<i;j++){
        star+="*";
        }
        
       console.log(space+star);
    }
    
}
startbigstrong(9)

// _____*
// ____***
// ___*****
// __*******
// _*********
// __*******
// ___*****
// ____***
// _____*

export default {startbigstrong,startpattern,startcon}