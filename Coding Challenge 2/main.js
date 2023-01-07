//2.1
// const massMarks = 78;
// const heighMark = 1.69;
// const massJohn = 92;
// const heighJohn = 1.95;
const massMarks = 95;
const heighMark = 1.88;
const massJohn = 85;
const heighJohn = 1.76;
const BMIMark = massMarks / heighMark ** 2;
const BMIJohn = massJohn / (heighJohn * heighJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);



//2.2
const massMarks1 = 78;
const heighMark1 = 1.69;
const massJohn1 = 92;
const heighJohn1 = 1.95;
// const massMarks1 = 95;
// const heighMark1 = 1.88;
// const massJohn1 = 85;
// const heighJohn1 = 1.76;
const BMIMark1 = massMarks1 / heighMark1 ** 2;
const BMIJohn1 = massJohn1 / (heighJohn1 * heighJohn1);
console.log(BMIMark1, BMIJohn1);
if( BMIMark1 > BMIJohn1 ){
    console.log(`BMI's Mark (${BMIMark1}) is higher than BMI's John (${BMIJohn1})`);
}else{
    console.log(`BMI's Mark (${BMIMark1}) is lower than BMI's John (${BMIJohn1})`)
}



//2.3
// const scoreDolphins = ( 96 + 108 + 89 ) / 3;
// const scoreKoalas = ( 88 + 91 + 110 ) / 3;
// console.log(scoreDolphins, scoreKoalas);
// if( scoreDolphins > scoreKoalas){
//     console.log (" Dolphins win the trophy ");
// }else if( scoreDolphins < scoreKoalas){
//     console.log ("Koalas win the trophy");
// }else if( scoreDolphins == scoreKoalas){
//     console.log ("Both win the trophy");
// }
// BONUS 1
const scoreDolphins = ( 97 + 112 + 81 ) / 3;
const scoreKoalas = ( 109 + 95 + 86 ) / 3;
console.log(scoreDolphins, scoreKoalas);
if( scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log (" Dolphins win the trophy ");
}else if( scoreDolphins < scoreKoalas && scoreKoalas >= 100){
    console.log ("Koalas win the trophy");
}else if( scoreDolphins == scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log ("Both win the trophy");
}else{
    console.log("No one wins the trophy");
}




//2.4
const bill = 500;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

