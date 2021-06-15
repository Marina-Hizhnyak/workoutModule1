// *****To string******

// Number to string
let value = 0;

// 1 способ

let toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

// 2 способ

toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);


value = 1;

toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

//Infinity
value = Infinity;

toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);


//NaN
value = NaN;

toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);


//--------Boolean------- 
//true to string

value = true;

// 1 способ

toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

// 2 способ

toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);


//false to string

value = false;

// 1 способ

toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

// 2 способ

toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

//undefined

value = undefined;

// 1 способ

toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

// 2 способ

toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

//null

value = null;

// 1 способ

toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

// 2 способ

toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

