/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) { 
    var contador = 0;  
    for(var i = 0; i < str.length; i++){
      if ("aeiou".includes(str[i].toLowerCase())) contador ++   //if the vowels aeiou are including in str in i position, in lower case,        
    }                                                           //So, contador++
    return contador;
  }