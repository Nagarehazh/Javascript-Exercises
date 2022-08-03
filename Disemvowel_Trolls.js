/* Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this exercise y isn't considered a vowel. */

function disemvowel(str) { //A function that receives str (the text to Disemvowel)
    var newStr = "";  //Create a new variable that contents the new string without vowels
    
    for (var i = 0; i < str.length; i++) {    //Create a For to Iterate
        if ("aeiou".includes(str[i].toLowerCase())) continue;  //If the vowels are including in the string in the position i (with lowecase) don't do anything
        newStr += str[i];                                      //But the vowels are not including in the string, add the letter to the new string variable 
    }
    return newStr;
} 