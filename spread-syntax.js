// objects

const pikachu = {
    name: 'pikachu 🐽'
};
const stats = {
    hp: 40,
    attack: 60,
    defense: 45
};
const another = {
    self: 2,
    lever: 100
}


'Bad Object Code 💩'
// you assigned the properties into the 'pikachu' variable 

// pikachu['hp'] = stats.hp
// pikachu['attack'] = stats.attack
// pikachu['defense'] = stats.defense

// or

// const lvl0 = Object.assign(pikachu,stats)
// const lvl1 = Object.assign(pikachu,{hp: 45})


'Good Object Code ✔️'
//the 'pikachu' varible doesn't have additional properties

const lv = {
    ...pikachu,
    ...stats
}
const lvl01 = {
    ...pikachu
}
console.log(lv);

// array

let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

'Bad Array Code'

// pokemon.push('Bulsasaur')
// pokemon.push('Metapod')
// pokemon.push('Weedle')

'Good Array Code'

// pokemon = [...pokemon, 'Bulsasaur', 'Metapod', 'Weedle']
// pokemon = ['Bulsasaur', 'Metapod', 'Weedle',...pokemon]
// pokemon = ['Bulsasaur', ...pokemon, 'Metapod', 'Weedle',]
// console.log(pokemon)