const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function batteryCounter(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

const totalBatteries = batteryCounter(batteryBatches);

console.log(totalBatteries)


/* function batteryCounter(arr, reducer, init) {
    let accum = init;
    for (const element of arr) {
        accum = reducer(accum, element);
    }
    return accum;
}

const totalBatteries = batteryCounter(batteryBatches, (accum, val), 0);

console.log(totalBatteries)*/



