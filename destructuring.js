const turtle = {
    name: 'bob 🐢',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}


console.log('%c bad code 💩', 'color: orange; font-weight: bold;');

function feedBadCode(animal) {
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`
}

console.log('%c good code ✔️', 'color: green; font-weight: bold;');

// avoid writing long

function feedGoodCodep1({name, meal, diet}) {
     return `Feed ${name} ${meal} kilos of ${diet}`
}

function feedGoodCodep2(animal) {
    const {name, meal, diet} = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`
}
console.log(feedGoodCodep2(turtle));
