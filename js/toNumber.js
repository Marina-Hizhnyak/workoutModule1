// *****To number******

//  String to number
let value = "Ho ho ho";

// 1 способ

let toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`${value}, через унарный + :`, toNumber);
console.log(`тип данных ${value}, через унарный + :`, typeof toNumber);

//  String number to number
 value = "12345";

// 1 способ

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`${value}, через унарный + :`, toNumber);
console.log(`тип данных ${value}, через через унарный + :`, typeof toNumber);

//  No value to number
 value = "";

// 1 способ

toNumber = Number(value);
console.log(`пустая строка ${value}, через конструктор Number():`, toNumber);
console.log(`тип данных пустой строки ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`пустая строка ${value}, через унарный + :`, toNumber);
console.log(`тип данных пустой строки ${value}, через через унарный + :`, typeof toNumber);


//  No value (space) to number
 value = " ";

// 1 способ

toNumber = Number(value);
console.log(`строка с пробелом ${value}, через конструктор Number():`, toNumber);
console.log(`тип данных строки с пробелом  ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`строка с пробелом  ${value}, через унарный + :`, toNumber);
console.log(`тип данных строки с пробелом ${value}, через через унарный + :`, typeof toNumber);



//--------Boolean------- 
//true to number

value = true;

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`${value}, через унарный + :`, toNumber);
console.log(`тип данных ${value}, через унарный + :`, typeof toNumber);


//false to number

value = false;

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`${value}, через унарный + :`, toNumber);
console.log(`тип данных ${value}, через унарный + :`, typeof toNumber);

// //undefined

 value = undefined;

//1 способ

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`${value}, через унарный + :`, toNumber);
console.log(`тип данных ${value}, через унарный + :`, typeof toNumber);

// //null

 value = null;

//1 способ

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`${value}, через унарный + :`, toNumber);
console.log(`тип данных ${value}, через унарный + :`, typeof toNumber);



