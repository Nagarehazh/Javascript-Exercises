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
