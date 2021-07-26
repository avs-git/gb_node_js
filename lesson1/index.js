const colors = require('colors');

const maxRange = Number(process.argv[2]);

if (isNaN(maxRange) || maxRange < 0) {
    console.log(colors.red('Аргумент должен быть положительным числом'));
    return;
}

const primes = [];

nextPrime:
for (let i = 2; i <= maxRange; i++ ){
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue nextPrime;
    }

    primes.push(i);
}

if(!primes.length) {
    console.log(colors.red(`До ${maxRange} нет простых чисел`));
    return;
}

const colorList = ['red', 'yellow', 'green'];

console.log(`Простые числа до ${maxRange}`);

primes.forEach((prime, idx) => {
    console.log(colors[colorList[idx % colorList.length]](prime));
})