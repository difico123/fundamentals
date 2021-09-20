const orders = [500, 30, 99, 15, 223];

'Bad Loop Code 💩'

let total = 0;
const widthTax = [];
const highValue = [];
for (i = 0; i < orders.length; i++) {

    //reduce
    total += orders[i];

    //Map
    widthTax.push(orders[i] * 1.1);

    //filter
    if (orders[i] > 100) {
        highValue.push(orders[i])
    }
}


'Good Loop Code ✅'

// Reduce

const toTal = orders.reduce((acc, cur) => acc + cur)
const withtax = orders.map(v => v * 1.1)
const highvalue = orders.filter(v => v > 100);

const arrays = [{
        id: 1,
        value: 0
    },
    {
        id: 2,
        value: 0
    },
    {
        id: 3,
        value: 0
    },
    {
        id: 4,
        value: 0
    },
]

console.log(arrays.indexOf({
    id: 1,
    value: 0
}))