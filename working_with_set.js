//A set is a collection of unique values.
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);  //Result {'apple', 'pear', 'plum'}