const horse = {
    name: 'Topher 🐴 ',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}

'Bad String Code 💩'

let bio = horse.name + ' is a ' + horse.size + ' horse skills in ' + horse.skills.join(' & ');

'Good String Code 💹'

const { name, size, skills} = horse;

let bio2 = `${name}is a ${size} skilled in ${skills.join(' & ')}`
console.log(bio2);

//Advanced Tag Example

function horseAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`
}
const bio3 = horseAge`this horse is ${horse.age}`;
console.log(horseAge('a',3));
console.log(bio3);

