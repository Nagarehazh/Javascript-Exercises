//Arrays in JavaScript come with a handy method that allows you to loop over each of their members. 
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)  // Pay attention to the quotes, Use ALT + 96 `
}
fruits.forEach(appendIndex);   //For each element of appendIndex (the function created above) aply the code inside of it.

/*Result:
0. kiwi
1. mango
2. apple
3. pear
*/