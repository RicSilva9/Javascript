'use strict';

// [08-01-2025] Hoje eu começei a estudar sério novamente!! Como estamos em um novo ano, decidi que minha meta é conseguir estudar o suficiente para ganhar confiança para aplicar em vagas de estágio até dezembro, e eu vou ewstudar todo dia pra isso, começando hoje!! Hoje eu começei a "seção 10" deste curso quero terminá-lo o quanto antes, mas hj eu assisti apenas a introdução e mapa da seção a partir de amanhã me aprofundarei no conteúdo.

// [12-01-2025] -- Começando

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 945;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const flight = 'LH234';
// const ricardo = {
//   name: 'Ricardo da Silva',
//   passport: 1829365894729,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 1829365894729) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, ricardo);
// console.log(flight);
// console.log(ricardo);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

// Exemp. ERROR;
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000000);
// };

// newPassport(ricardo);
// checkIn(flight, ricardo);
// console.log(ricardo);

// Uma coisa que o professor falou "Na programação existem dois termos que são usados o tempo todo ao lidar com funções, que é passage por valor e passagem por referência, muitos programadorws experientes que são novos em javascript tem alguma confusão entre esses termos e como funciona em javascript. Bom, javascript não tem passagem por referência [resto da explicação...]"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// [14-01-2025] -- 2 aulas assistidas hoje

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!!', upperFirstWord);
// transformer('Javascript is the best!!', oneWord);

// JS uses callbacks all the time
// const high5 = function () {
//   console.log('');
// };

// document.body.addEventListener('click', high5);
// ['Ricardo', 'Rafael', 'Rakelly'].forEach(high5);

//////// ("Abstração" O professor falou um pouco sobre e disse que veremos mais na seção de OOP) Entender sobre isso é absolutamente crucial para o meu progresso. E, na verdade, o professor considera esta uma das aulas mais importantes do curso. porque as funções de callbacks são, na verdade, uma parte vital da linguagem JavaScript.////////

///////////// Amanhã eu irei tentar criar esse mesmo tipo de lógica de algo que vejo no mundo real, vai ser ótimo para treinar e fixar isso na cabeça. Só n posso esquecer de ver as duas aulas amanhã  /////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// [16-01-2025] Vou começar o dia fazendo o que falei logo acima☝️
// const Formatter = function (str, fn) {
// console.log(`Original: ${str}`);
//   console.log(`Lower Case: ${fn(str)}`);
// }; // função que irá usar a string e a função e vai retornar o resultado

// Funções que serão usados;
// const low = function (str) {
//   return str.toLowerCase();
// };

// const up = function (str) {
//   return str.toUpperCase();
// };

// const space = function (str) {
//   return str.replace(/ /g, '');
// };

// const firstUp = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// Testes
// Formatter('Olá Meu Nome é RicardÃO', low);
// Formatter('Olá Meu Nome é RicardÃO', up);
// Formatter('Olá Meu Nome é RicardÃO', space);
// Formatter('Olá Meu Nome é RicardÃO', firstUp);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// [CONTINUANDO...]

// const greet = function (greeting) {
// return function (name) {
// console.log(`${greeting} ${name}`);
// };
// };

// const greetOla = greet('Olá');
// greetOla('Ricardo');
// greetOla('felipe');

////  Pode ser usado direto.  ////
// greet('Hello')('Jão');
// greet('Hello')('Lucca');

//ArrowFun. -Challenge
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Boy');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// [17-01-2025]

// const lufthansa = {
// airline: 'Lufthansa',
// iataCode: 'LH',
// bookings: [],

// book(flightNum, name) {
// console.log(
// `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
// );
// this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// },
// };

// lufthansa.book(777, 'Ricardo Sousa');
// lufthansa.book(257, 'Rafael Santos');

// const eurowings = {
// airline: 'Eurowings',
// iataCode: 'EW',
// bookings: [],
// };

// const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 411, 'Jacob Bridgerton');
// console.log(lufthansa);

// const swiss = {
// airline: 'Swiss Air Lines',
// iataCode: 'LX',
// bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// Apply method
// const flightData = [837, 'Pedro Scooby',];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// [17-01-2025]
// const lufthansa = {
// airline: 'Lufthansa',
// iataCode: 'LH',
// bookings: [],

// book(flightNum, name) {
// console.log(
// `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
// );
// this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// },
// };

// const eurowings = {
// airline: 'Eurowings',
// iataCode: 'EW',
// bookings: [],
// };

// const swiss = {
// airline: 'Swiss Air Lines',
// iataCode: 'LX',
// bookings: [],
// };

// const book = lufthansa.book;

// The bind Method
// book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
// console.log(this);

// this.planes++;
// console.log(this.planes);
// };
// lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// [18-01-2025]
// DESAFIO DE CODIFICAÇÃO #1 - MINHA RESOLUÇÃO
// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer(callback) {
//     const answer = Number(
//       prompt(`${this.question}\n${this.options.join('\n')}`)
//     );

//     if (
//       Number.isInteger(answer) &&
//       answer >= 0 &&
//       answer < this.answers.length
//     ) {
//       this.answers[answer]++;
//     } else {
//       console.log('Invalid input. Please enter a number between 0 and 3.');
//     }
//     callback('array');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// BONUS
// const testData1 = [5, 2, 3];
// const testData2 = [1, 5, 3, 9, 6, 1];

// poll.displayResults.call({ answers: testData1 }, 'array');
// poll.displayResults.call({ answers: testData1 }, 'string');

// const displayTestData1 = poll.displayResults.bind({ answers: testData1 });
// displayTestData1('array');
// displayTestData1('string');

// document.querySelector('.poll').addEventListener('click', function () {
//   poll.registerNewAnswer(poll.displayResults.bind(poll));
// });

// DESAFIO DE CODIFICAÇÃO #1 - RESOLUÇÃO DO PROFESSOR
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         ${this.question}\n${this.options.join('\n')}\n(Write option number)
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(Poll results are ${this.answers.join(', ')});
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// [19-02-2025] Hoje eu concluo essa disciplina

// Dessa forma abaixo a função não será executada apenas uma vez
// const runOnce = function () {
//   console.log('this will never run again');
// };
// runOnce();
// runOnce();

// fazendo isso ela será usada apenas esta vez. É disso que se trata o Immediately Invoked Function Expressions (IIFE)
// (function () {
// console.log('this will never run again');
// const isPrivate = 23;
// }); //();
// console.log(isPrivate);

// () => console.log('this will ALSO never run again');

// {
// const isPrivate = 23
// var isNotPrivate = 46
// }
// console.log(isPrivate);
// console.log(isNotPrivate);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();
// booker();

// console.dir(booker)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// re-assigning f function
h();
f();

console.dir(a);
