function isIsogram(str){
    //...
    let iStr = str.toLowerCase(); 
      
    for(let i = 0; i < iStr.length; i++){
      for(let j = i + 1; j < iStr.length; j++){  
        if(iStr[i] === iStr[j]){
          return false;
        }
      }
    }
    return true;
   }