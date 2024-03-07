// 1.   What is javascript
//      Javascript is a cross platform ,interpreted compiled programming language. It is also known as scripting language for webpage. It controls multimedia within web pages and allows them to become interactive. 

// 2.   How does js works
//      JS is a single threaded and single concurrent programming language which means it can handle one task at a time or, it uses dynamic typing, where type safety is verified at the runtime.

// 3.   What is variable
//      Variables are containers for storing information. In other words, Variables are named values and can store any type of value.

// 4.   Declare a Variable

// 5.   Types of Data in Variable and how can you find the type of Data in variable.
//      Their are 8 basic data types in Javascipt.They are:
//      1.String 2.Number 3.BigInt 4.Boolean 5.undefined 6.Null 7.Symbol 8.Object
//      Here, all data types except 8.object are primitive data types. whereas, object is non-primitive.
//      Note: The 8.Object (non-premitive) can store collection of data, whereas primitive data type can only store a single data.
//      *find the type of data in variable-

// 6.   primitive and non-primitive data types
//      source: https://www.geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript/
 
// 7.   Naming convention of js variables
//      variable name should follow, camalCase, snake_case or PascalCase naming convention.

// 8.   Math Operations by arithmetic operators
        // +	Addition
        // -	Subtraction
        // *	Multiplication
        // **	Exponentiation (ES2016)
        // /	Division
        // %	Modulus (Remainder)
        // ++	Increment
        // --	Decrement

// 9.   shorthand +=, -=, *=, /=, ==, !=, %=
//10.   ++,--
//11.   parseInt(), parseFloat()
//12.   toFixed()
//13.   Purpose of an array
        // Arrays are used when there is a need to use many variables of the same type. It can be defined as a sequence of objects which are of the same data type. It is used to store a collection of data, and it is more useful to think of an array as a collection of variables of the same type.
//14.   How to declare array in js.
//15.   Number of elements in an array
//16.   What is index?
        // The index indicates the position of the element within the array. Index number always starts from 0
//17.   Find the value of an element by index
//18.   Change an element by index
//19.   Get the index of an element by the value
//20.   push(),pop(),shift(),unshift()
//21.   Comparison Operator >,<, ==, !=, <=, >=, ===, !==
//21.   Logical operator, && , || , !(a==b)
//22.   Difference between while loop and for loop

// loop Problem 1: write "ajke amr mon vlo nei" for 9 times
var i=1;
while(i<10){
    console.log("ajke amr mon vlo nei");
    i++;
}

// loop problem 2: Display number between 58 to 68
var i=58;
while(i<=68){
    console.log(i);
    i++
}

// loop problem 3: show all even numbers from 412 to 429
var i=412;
while(i<=429){
    console.log(i);
    i+=2;
}

// loop problem 4: show all odd numbers from 581 to 613
var i=581;
while(i<=613){
    console.log(i);
    i+=2;
}

// loop problem 5: declare an array for the things you are learning right now
var iLearn=['html','css','javascript','git']
for(var i=0;i<iLearn.length;i++){
    console.log(iLearn[i]);
}

// loop problem 6: Run a loop 30-86, but this loop will stop if the values get higher than 44
for(i=30;i<=86;i++){
    if(i>44){
        break;
    }
    console.log(i);
}

// loop problem 7: Write the prices of book that you have, but if the prices are equal or more than 100 then skip them.
var bookPrices=[50,70,100,130,75,150,65,80,92,101,30];
for(var i=0;i<bookPrices.length;i++){
    var price=bookPrices[i];
    if(price>=100){
        continue;
    }
    console.log(price);
}