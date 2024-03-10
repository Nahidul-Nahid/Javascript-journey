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

// problem 5
var fruits=["Apple","Banana","Orange"];
console.log(fruits.indexOf("Banana"));
fruits.pop();
console.log(fruits);
fruits.push("Watermelon");
console.log(fruits);

// problem 6
// user given value
var myScore=85;
var tomScore=66;
var janeScore=95;
var peterScore=56;
var johnScore=40;
if(80<=johnScore){
    console.log("A grade")
}
else if(60<=johnScore){
    console.log("B grade")
}
else if(50<=johnScore){
    console.log("C grade");
}
else if(40<=johnScore){
    console.log("D grade");
}
else{
    console.log("F grade");
}

// problem 7
var num1=13;
var num2=79;
var num3=85;
if(num1>num2 && num1>num3){
    console.log("Largest number is: "+num1);
}
else if(num2>num1 && num2>num3){
    console.log("Largest number is: "+num2);
}
else{
    console.log("Largest number is: "+num3);
}

// problem 8
var a=9;
var b=8;
var c=9;
if(a==b || b==c || a==c){
    console.log("This Triangle is Isoceles");
}
else{
    console.log("This triangle is not Isoceles");
}


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

// get and set value by array index number
var fruits=["apple","orange","lemon","banana"];
var age=[20,22,24,26,28,30];
console.log(fruits.length);
console.log(age.length);
var total= fruits.length+age.length;
console.log(total);
console.log(age[3]);
age[3]=100;
console.log(age);
console.log(age[3]);

//Find the index number of any values from array
var age=[20,22,24,26,28,30];
console.log(age[3]);
age[3]=100;
console.log(age);
console.log(age[3]);
console.log(age.indexOf(30));

//add values to array from last position
var number=[10,20,30,40,50];
number.push(60,70);
console.log(number);

//Remove last number from array and store the pop number in a variable
var number=[10,20,30,40,50];
var remove=number.pop();
console.log(number);
console.log(remove);

//add values to beginning of array
var number=[10,20,30,40,50];
number.unshift(60,70);
console.log(number);

//remove values from beginning of array
var number=[10,20,30,40,50];
var remove=number.shift();
console.log(number);
console.log(remove);

// Compare variable by comparison operator:
var num1=5;
var num2=8;
console.log(num1<num2);
console.log(num1>num2);
console.log(num1==num2);
console.log(num1!=num2);
var num3=10;
var num4=11;
console.log(num3<=num4);
console.log(num3>=num4);
var num5="12";
var num6=12;
console.log(num5===num6);
console.log(num5!==num6);

// Logical Operator
var num1=5;
var num2=6;

// Conditional decision, if, else comparison:
var salary=40000;
var graduate="honors";
var car ="2";
var home=1;
var yes="you are qualified";
var no="You are not qualified"
if(salary>50000){
    console.log(yes);
}
else{
    console.log(no);
}
if(car===2){
    console.log(yes);
}
else{
    console.log(no);
}

//***************Multiple condition**************** */
// user given data
var salary=80000;
var education="honors";
var car=0;
// My variable set for user to show them if they are qualified or not
var yes="you are qualified";
var no="you are not qualified";
//My condition, depending on this condition and user given  data, result will be given
if(education=="honors" && (salary>50000 || car>=1)){
    console.log(yes);
}
else{
    console.log(no);
}

// user given data
var salary=80000;
var education;
var car=2;
// My variable set for user to show them if they are qualified or not
var yes="you are qualified";
var no="you are not qualified";
//My condition, depending on this condition and user given  data, result will be given
if(education=="honors" && (salary>50000 || car>=1)){
    console.log(yes);
}
else{
    console.log(no);
}
//*************************************************//

// Multi stage condition using if, else if, else
var salary=50000;
var car=2;
var education="honors";
var age=24;
var yes="you are qualified";
var neutral1="we will think";
var neutral2="you are nearly qualified but not qualified"
var no="you are not qualified"
if(salary>80000 && age>23){
    console.log(yes);
}
else if(salary>80000 || education=="Masters"){
    console.log(neutral1);
}
else if(age>23 && car>1){
    console.log(neutral2)
}
else{
    console.log(no);
}

// Nested Condition:
var mathMark=75;
var physicsMark=78;
var chemistryMark=80;
var englishMark=72;
var literatureMark=75;
var totalMark=mathMark+physicsMark+chemistryMark+englishMark;
if(mathMark>80){
    if(physicsMark>80 && chemistryMark>80){
        console.log("you are trying hard")
    }
    else if( physicsMark>80 || chemistryMark>80){
        console.log("you are trying hard but you can do more")
    }
    else{
        console.log("oh! are you good in only math?")
    }
}
else if(englishMark>60 && literatureMark>60){
    if(englishMark>literatureMark){
        console.log("so you are good in english")
    }
    else{
        console.log("so you are good in literature")
    }
}
else{
    console.log("You need to study more");
}

// Javascript loop
var abc=0;
while(abc<10){
	console.log("abc is less than 10");
    console.log(abc);
	abc++;
}
//1 theke 10 porjonto dekhate chaile, var a er value 1 dite hobe. and conditon <= eirup condition use korte hobe.
var a=1;
while(a<=10){
    console.log(a);
    a++;
}

// Odd number in 1-10
var a=1;
while(a<=10){
    console.log(a);
    a+=2;
}

// Even number in 1-10
var a=0;
while(a<=10){
    console.log(a);
    a+=2;
}

// for loop
for(var i=0;i<=10;i+=2){
    console.log(i);
}

// Run a loop for showing each element from an array
var colors=["red","brown","orange","blue","white","black","green"];
var length=colors.length;
for(var i=0;i<length;i++){
    var color=colors[i];
    console.log(color);
}

// Loop Break
var num=[10,20,30,40,50,35,65,24,75];
for(var i=0;i<num.length;i++){
    var number=num[i]
    if(i>4){
        break;
    }
    console.log(number);
}

//Condition in loop
var a=1;
while(a<=7){
    if(a%2==0){
        console.log(a,"is even number");
    }
    else{
        console.log(a,"is odd number");
    }
    a++;
}

//slice(),substring(),includes()
var nam1=["Nahidul","Islam","Nahid","some","thing"];
var nam="Nahidul Islam Nahid";
var some=nam1.slice(2,4);
console.log(some);
var none=nam.substring(2,6);
console.log(none);
console.log(nam.includes("l I"));

//Function
function success(year){
    console.log("focus on forward about only what i really want to do");
    console.log("Success should be get",year);
}
success("as first as possible");

// Function with multiple parameter
function sum(a,b,c,d,e,f){
    var sum=a+b+c+d+e+f;
    console.log(sum);
}
var total=sum(5,6,7,8,9,4);

//Return from a function
function sum(a,b,c,d,e){
    var sum=a+b+c+d+e;
    console.log("Given numbers:",a,b,c,d,e);
    return sum;
}
var total=sum(1,2,3,4,5);
console.log("sum of these number:",total);

//Average number return from a function
function avgNum(a,b,c,d,e){
    const sum=a+b+c+d+e;
    const average=sum/5;
    console.log("Given numbers:",a,b,c,d,e);
    return average;
}
const valueA=1;
const valueB=2;
const valueC=3;
const valueD=4;
const valueE=5
const avg=avgNum(valueA,valueB,valueC,valueD,valueE);
console.log("Averege of these number:",avg);

//one function, multiple time parameter value setting
function sum(number1,number2){
    var sum=number1+number2;
    return sum;
}
var one=1;
var two=2;
var total1=sum(one,two);
var total2=sum(total1,total1);
var finalTotal=sum(total1,total2);
console.log(finalTotal);

// Square of a given number
function square(number){
    return Math.pow(number, 3);
}
var some=square(3);
console.log(some);

//random thinking when i bought some eggs
var egg=["egg1","egg2","egg3","egg4","egg5","egg6","egg7"];
var quantity=[10,9,8,12,11.03,15,10.5];
for(i=0;i<egg.length;i++){
    console.log("The quantity of"+" "+egg[i]+" "+"is",quantity[i],"gm");
}

//Object
var myLaptop={
    brand: "Asus",
    ram: "4gb",
    ssd: "250gb",
    color: "silver",
    price: 43000
}
console.log(myLaptop);
console.log(Object.keys(myLaptop)); // Object.keys(objectName), evabe ekti object er shb keys gulo array akare dekhano jay.
console.log(Object.values(myLaptop)); // Object.values(objectName), evabe ekti object er shb values gulo array akare dekhano jay.

//Total 3 ti upaye kono keys er value get and set kora jay.
// 1.
var laptopBrand=myLaptop.brand;
console.log(laptopBrand);
// 2.
var laptopRam=myLaptop["ram"];
console.log(laptopRam);
// 3.--------- ei way te dynamic vabe value get kora jay. property keys er name ekti variable e set kore, sei variable ti objectName[variableName], evabe third bracket e likhte hoy.
var lap_ram="price";
var ram_size=myLaptop[lap_ram];
console.log(lap_ram,ram_size);

//Advance looping through an object
// Hard way:
var bottle={
    brand: "Coca-Cola",
    quantity: "1.25L",
    color: "black",
    brandColor: "red",
    bottleColor: "white"
}
var bottleKeys=Object.keys(bottle);
for(i=0;i<bottleKeys.length;i++){
    var keys=bottleKeys[i];
    var values=bottle[keys];
    console.log(keys,values);
}
// Easy way by for in loop:
var bottle={
    brand: "Coca-Cola",
    quantity: "1.25L",
    color: "black",
    brandColor: "red",
    bottleColor: "white"
}
for(var keys in bottle){
    var values=bottle[keys];
    console.log(keys,values)
}