// problem 1:
console.log("Sammple Input:")
var givenMoney=1000;
var gm="Given Money="+" "+givenMoney;
var costOfFruits=700;
var cof="Cost of Fruits="+" "+costOfFruits;
console.log(gm)
console.log(cof)
var returnMoney=givenMoney-costOfFruits;
var output="Return Money="+" "+returnMoney;
console.log(output);

// problem 2:
var text="Sample Input:";
console.log(text);
console.log("75.25,65,80,35.45,99.50");
var math=75.25;
var biology=65;
var chemistry=80;
var physics=35.45;
var bangla=99.50;""

var totalMarks=math+biology+chemistry+physics+bangla;
var average= totalMarks/5;
average=average.toFixed(2);
average=parseFloat(average);
console.log("Output")
console.log(average);

// problem 3
var one="I am going to be";
var two="an awesome Web Developer";
var final=one+" "+two;
console.log(final);

// problem 4
var givenNumber1=119;
var givenNumber2=5;
var modulus=givenNumber1%givenNumber2;
console.log(modulus);

var mangoPrice=20;
var orangePrice=30;
var mango=10;
var orange=5;
var division=mango/orange;
var multiplication=mango*orange;
var priceDifference=mangoPrice-orangePrice;
console.log(mangoPrice);
console.log(mangoPrice+orangePrice);
console.log(priceDifference);
console.log(division)
console.log(multiplication)

// setting a new value for existing variable
var mango=5;
var mango=10;
//add some value to existing value
// var mango = mango+5; but this operation can be written in shorthand
mango += 5;
console.log(mango);
mango -= 2;
console.log(mango);
mango /= 2;
console.log(mango);
mango *= 5;
console.log(mango);
mango %= 15;
console.log(mango);
mango ++;
// Increasing 1
console.log(mango);
mango --;
// Decreasing 1
console.log(mango);

// String Concatenation
var firstName="Nahidul";
var lastName="Nahid";
var fullName=firstName+" "+lastName
console.log(fullName);
// Number quotation er moddhe lekha hole seti o string hishebe gonno hoy
var orange=5;
var mango="6";
var lemon="5.50"
var fruit=orange+mango;
console.log(fruit);
// convert string to Number
mango=parseInt(mango);
lemon=parseFloat(lemon);
var fruit=orange+mango+lemon;
console.log(fruit);

// type of variable value
var orange="98";
var apple=7
var iAmHappy=true;
var lemon;
console.log(typeof orange);
console.log(typeof apple);
console.log(typeof iAmHappy);
console.log(typeof lemon);
// So,javascript dan pasher value er upor depend kore data type select hoy, etike js er dynamic typing bole.
//doshomik number hole, doshomik er por koto ghor hobe ta fixed kore deya jabe
var num1=0.1;
var num2=0.2;
var sum=num1+num2;
sum=sum.toFixed(1);
sum=parseFloat(sum);
console.log(sum);