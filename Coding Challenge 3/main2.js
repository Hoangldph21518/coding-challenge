//3.1
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log (calcAverage(4, 5, 6));
// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(44, 12, 1);
console.log (scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas){
        console.log (`Dolphins win the trophy (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log (`Koalas win the trophy (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log ('No team win:))))))');
    }
}
checkWinner(scoreDolphins, scoreKoalas);
// Test 2
scoreDolphins = calcAverage(20, 40, 52);
scoreKoalas = calcAverage(100, 50, 200);
console.log (scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);




//3.2
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]),];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2],];
console.log (bills, tips, total);




//3.3
const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
const john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);
if(mark.bmi > john.bmi){
    console.log (`${mark.fullname}'s BMI ${mark.bmi} is heigher than ${john.fullname}'s BMI ${john.bmi}`);
}else if(john.bmi > mark.bmi){
    console.log (`${john.fullname}'s BMI ${john.bmi} is heigher than ${mark.fullname}'s BMI ${mark.bmi}`);
}




//3.4
const calcTip1 = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 85, 52];
const tips1 = [];
const total1 = [];

for (let i = 0; i < bills1.length; i++) {
    const tip1 = calcTip(bills1[i]);
    tips1.push(tip1);
    total1.push(tip1 + bills1[i]);
}
console.log(bills1, tips1, total1);
const calcAverage1 = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log (calcAverage1([4, 6, 8]));
console.log (calcAverage1(total1));
console.log (calcAverage1(tips1));



//5.1

