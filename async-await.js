const random = () => {
    return Promise.resolve(Math.random())
}

console.log(random())

'Bad Promise Code 💩'

const sumRandomAsynNums = () => {
    let first;
    let second;
    let third;

    return random()
        .then(v => {
            first = v;
            return random();
        })
        .then(v => {
            second = v;
            return random();
        })
        .then(v => {
            third = v;
            return first + second + third;
        })
        .then(v => {
            console.log(`Result ${v}`)
        });
}

const sumRandomAsynNum = async() => {
    const first1 = await random();
    const second1 = await random();
    const third1 = await random();

    console.log(`Result ${first1 + second1 + third1}`)
}
sumRandomAsynNums();
sumRandomAsynNum();