//I'm going to create a little piggy bank program using closures
function moneyBank(){
    let saveCoins = 0;
    function addCoins(coin){  //closure
        saveCoins += coin;
        console.log(`Wonderful, you have a balance of ${saveCoins}`);
    }
    return addCoins;
}

const mySavings = moneyBank(); //moneyBank() must be assigned to a variable in order to call the addCoins function
mySavings(5);
mySavings(5);
mySavings(50);

const otherIncomes = moneyBank();
otherIncomes(10);
otherIncomes(50)

console.log(mySavings)
console.log(otherIncomes)
