// Lvl 1_1

// function intro() {
//     console.log('Hello World');
// }

// intro = () => console.log('Hello World');

// intro();

// Lvl 1_2

// function hello() {
//     console.log('Hallo');
// }

// let hello = () => console.log('Hallo');

// hello();

// function sum(x, y) {
//     console.log(x + y);
// }

// let sum = (x, y) => console.log(x + y);

// sum(2, 3);

// function multiply(x, y) {
//     window.alert(x * y);
// }

// let multiply = (x, y) => window.alert(x * y);

// multiply(2, 3);

// function showType(x) {
//     console.log(typeof (x));
// }

// let showType = (x) => console.log(typeof (x));

// showType(x);

// true - boolean
// "hi" - string
// 1 - number
// { name: "John" } - object
// [0, 1] - object

//Lvl 1_4

// let hero = (heroName, heroPower, heroEnemy) => {
//     let name, power, enemy;
//     name = `Mein Lieblingsheld aus Marvel ist: ${heroName}`;
//     power = `Er/Sie hat die Fähigkeit: ${heroPower}`;
//     enemy = `Sein/Ihr größter Feind ist: ${heroEnemy}`;
//     console.log(name, power, enemy);
// }

// hero('Bibi Blocksberg', 'Hexen', 'Das Hexverbot');

//Lvl1_6

// let returnOne = () => {
//     return 1;
// }

// let x = 1;
// let y = returnOne();

// if (x === y) {
//     console.log("Wird das gedruckt?");
// }

//Lvl1_7

// let double = (x) => {
//     return x * 2;
// }

// console.log(double(3));

//Lvl1_8

// let age = (yearborn) => {
//     return 2022 - yearborn;
// }

// console.log(age(1984));

// let compAge = (alter1, alter2) => {
//     let alterDiff = alter1 - alter2;
//     return alterDiff;
// }

// console.log(compAge(38, 36));

let present = (vorname, nachname, geburtsort, alter, wohnort) => {
    return `Mein Name ist ${vorname} ${nachname}. Ich bin in ${geburtsort} geboren. Ich lerne Coden bei SuperCode. Ich bin ${alter} Jahre alt. Ich wohne in ${wohnort}.`
}

console.log(present('Stephan', 'Pagel', 'Neuruppin', '38', 'Neuruppin'));

