let task = [
    "Exercise",
    "Work",
    "Household order"
];

function showPlann(plan1, plan2, plan3){
    console.log(`Start with ${plan1}`);
    console.log(`Then begin ${plan2}`);
    console.log(`And finally do ${plan3}`);
}

showPlann(...task);   //Without spread operator I would have had to use showPlann(taks[0], task[1, task[2]]);


//1. Other uses:
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array 
//Result: ['apple', 'pear', 'plum', 'blueberry', 'strawberry']

//2. Other uses: join objects
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

//3. Other uses: Add new members to arrays without using the push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);
//Result: ['onion', 'parsley', 'carrot', 'beetroot']

//4. Other uses: copy an object into a completely separate object
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed)  //Result 201, 200.

//5. Other uses: You can copy an array into a completely separate array
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2)  //Result: ['apples'] 'not' ['apples','pears']