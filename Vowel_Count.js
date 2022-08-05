function getCount(str) { 
    var contador = 0;  
    for(var i = 0; i < str.length; i++){
      if ("aeiou".includes(str[i].toLowerCase())) contador ++   //if the vowels aeiou are including in str in i position, in lower case,        
    }                                                           //So, contador++
    return contador;
  }