'use strict';

/*

/////////////////////////////////////////////////
//  SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(0, -1));

//  SPLICE - A primcipal diferença em relação ao slice é que o splice realmente altera a matriz original, enquanto o slice apenas faz uma cópia da matriz original.
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);

//  REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['l', 'k', 'j', 'i', 'h', 'g','f' ]
console.log(arr2.reverse());
console.log(arr2);

//  CONCAT
const latters = arr.concat(arr2)
console.log(latters);
console.log([...arr, ...arr2]);

//  JOIN
console.log(latters.join(' - '));

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//Getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Ricardo'.at(0));
console.log('Ricardo'.at(-1));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  // ('--- FOR OF ---');
// for (const movement of movements) 
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

  // ('--- FOREACH ---');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
0: function(200)
1: function(450)
2: function(400)
...

  // ('--- FOREACH WITH MAPS AND SETS ---');
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${_}: ${value}`);
}
);
*/

/* Coding Challenge #1 

Julia e Kate estão fazendo um estudo sobre cães. Então, cada uma delas perguntou a 5 donos de cães sobre a idade de seus cães e armazenou os dados em uma matriz (uma matriz para cada). Por enquanto, elas estão interessadas apenas em saber se um cão é adulto ou filhote. Um cão é adulto se tiver pelo menos 3 anos de idade e é filhote se tiver menos de 3 anos.

Crie uma função 'checkDogs', que aceita 2 matrizes de idades de cães ('dogsJulia' e 'dogsKate') e faz as seguintes coisas:

1. Julia descobriu que os donos do PRIMEIRO e dos ÚLTIMOS DOIS cães na verdade têm gatos, não cães! Então crie uma cópia superficial do array de Julia e remova as idades dos gatos daquele array copiado (porque é uma prática ruim mutar parâmetros de função)
2. Crie um array com os dados de Julia (corrigidos) e Kate
3. Para cada cachorro restante, registre no console se ele é um adulto ("O cachorro número 1 é um adulto e tem 5 anos") ou um filhote ("O cachorro número 2 ainda é um filhote 🐶")
4. Execute a função para ambos os conjuntos de dados de teste

DICA: Use ferramentas de todas as aulas desta seção até agora 😉

DADOS DE TESTE 1: Dados de Julia [3, 5, 2, 12, 7], dados de Kate [4, 1, 15, 8, 3]
DADOS DE TESTE 2: Dados de Julia [9, 16, 6, 8, 3], dados de Kate [10, 5, 6, 1, 4]

BOM SORTE 😀
*/
// Resposta
// const checkDogs = function (dogsJulia, dogsKate) {
//   const juliaDogsCorrected = dogsJulia.slice();
//   juliaDogsCorrected.splice(0, 1);
//   juliaDogsCorrected.splice(-2);

//   const dogs = juliaDogsCorrected.concat(dogsKate);

//   dogs.forEach(function (dog, i) {
//     const age = dog >= 3 ? 'adulto' : 'filhote';
//     console.log(`O cachorro número ${i + 1} é um ${age} e tem ${dog} anos`);
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//////////////////////////////////////////////////////////////////////////////////////////////////

/* Coding Challenge #2

Vamos voltar ao estudo de Julia e Kate sobre cães. Desta vez, elas querem converter as idades dos cães em idades humanas e calcular a idade média dos cães em seu estudo.

Crie uma função 'calcAverageHumanAge', que aceita um array de idades dos cães ('ages') e faz o seguinte em ordem:

1. Calcula a idade do cão em anos humanos usando a seguinte fórmula: se o cão tem <= 2 anos, idadehumana = 2 * idadecachorro. Se o cão tiver > 2 anos, idadehumana = 16 + idadecão * 4.
2. Exclua todos os cães com menos de 18 anos humanos (o que equivale a manter cães com pelo menos 18 anos).
3. Calcule a idade humana média de todos os cães adultos (você já deve saber, por outros desafios, como calculamos as médias 😉).
4. Execute a função para ambos os conjuntos de dados de teste.

DADOS DE TESTE 1: [5, 2, 4, 1, 15, 8, 3]
DADOS DE TESTE 2: [16, 6, 10, 5, 6, 1, 4]

BOA SORTE 😀
*/
// Resposta
// MINHA FORMA DE FAZER/COMO EU CONCLUI.
// const testOne = [5, 2, 4, 1, 15, 8, 3];
// const calcIdadeHumanaMedia = testOne.map((age) => age <= 2 ? 2 * age : 16 + age * 4, );
// console.log(calcIdadeHumanaMedia);
// // 1. 🆗
// const adultos = calcIdadeHumanaMedia.filter((age) => age >= 18);
// console.log(adultos);
// // 2. 🆗
// const media = adultos.reduce((acc, age) => acc + age, 0) / adultos.length;
// console.log(media);
// // 2. 🆗

// CHAT-GPT
// const dados1 = [5, 2, 4, 1, 15, 8, 3];
// const dados2 = [16, 6, 10, 5, 6, 1, 4];
// function calcMediaIdadeHumana(cachorros) {
//   const media = cachorros
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4)) // Converter para idade humana
//     .filter(age => age >= 18) // Manter apenas adultos
//     .reduce((acc, age, _, array) => acc + age / array.length, 0); // Calcular média

//   return media;
// }
// console.log(calcMediaIdadeHumana(dados1));
// console.log(calcMediaIdadeHumana(dados2));

// JONAS RESOLUTION
// const calcAverageHumanAge = function(ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

//   return average;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// BANKIST APP

/* Coding Challenge #4
Julia e Kate ainda estão estudando cães e, desta vez, estão estudando se eles estão comendo demais ou de menos.
Comer demais significa que a porção atual de comida do cão é maior do que a recomendada, e comer de menos é o oposto.
Comer uma quantidade aceitável significa que a porção atual de comida do cão está dentro de uma faixa de 10% acima e 10% abaixo da porção recomendada (veja a dica).

1. Faça um loop sobre o array que contém os objetos "cão" e, para cada cão, calcule a porção de comida recomendada e adicione-a ao objeto como uma nova propriedade. NÃO crie um novo array, simplesmente faça um loop sobre o array. Formula: recommendedFood = peso ** 0,75 * 28. (O resultado é em gramas de comida e o peso precisa ser em kg)
2. Encontre o cachorro de Sarah e registre no console se ele está comendo demais ou de menos. DICA: Alguns cães têm vários donos, então primeiro você precisa encontrar Sarah no array de proprietários, então esta é um pouco complicada (de propósito) 🤓
3. Crie um array contendo todos os donos de cães que comem demais ('ownersEatTooMuch') e um array com todos os donos de cães que comem de menos ('ownersEatTooLittle').
4. Registre uma string no console para cada array criado em 3., como esta: "Os cachorros de Matilda, Alice e Bob comem demais!" e "Os cachorros de Sarah, John e Michael comem de menos!" 5. Registre no console se algum cachorro está comendo EXATAMENTE a quantidade de comida recomendada (apenas verdadeiro ou falso).
6. Registre no console se algum cachorro está comendo uma quantidade CERTA de comida (apenas verdadeiro ou falso).
7. Crie um array contendo os cachorros que estão comendo uma quantidade CERTA de comida (tente reutilizar a condição usada em 6).
8. Crie uma cópia superficial do array dogs e classifique-a pela porção de comida recomendada em ordem crescente (lembre-se de que as porções estão dentro dos objetos do array).

DICA 1: Use várias ferramentas diferentes para resolver esses desafios. Você pode usar a aula resumida para escolher entre elas 😉
DICA 2: Estar dentro de uma faixa de 10% acima e abaixo da porção recomendada significa: atual > (recomendado * 0,90) && atual < (recomendado * 1,10). Basicamente, a porção atual deve estar entre 90% e 110% da porção recomendada.

DADOS DE TESTE:
const dogs = [
{ peso: 22, curFood: 250, donos: ['Alice', 'Bob'] },
{ peso: 8, curFood: 200, donos: ['Matilda'] },
{ peso: 13, curFood: 275, donos: ['Sarah', 'John'] },
{ peso: 32, curFood: 340, donos: ['Michael'] }
];

BOA SORTE 😀
*/

/*Resposta

const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  
  const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return average;
};

const calcAverageHumanAge = ages =>
  ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4)).filter(age => age >= 18).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

*/

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // Clear existing movements

  // Display each movement
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}R$</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}R$`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}R$`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}R$`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1; // Filtro para garantir que o interesse seja pelo menos 1
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}R$`;
};
calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

//////////////////////////////////////////////////////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//METHOD .MAP
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const realToUsd = 5.5;
// const movementsUSD = movements.map(function (mov) {
//   return mov * realToUsd;
// });

// const movementsUSD = movements.map(mov => mov* realToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * realToUsd);
// console.log(movementsUSDfor);

// movements.map((mov, i) => {
//   console.log(`Moviment ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);
// })

// DESSA FORMA ENSINADA NA AULA, NÃO TEMOS UM "EFEITO"
// const movementsDescriptions = movements.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);
// console.log(movementsDescriptions);

// METHOD .FILTER
// const deposits = movements.filter(function(mov) {
//   return mov < 0;
// })
// console.log(movements);
// console.log(deposits)

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// METHOD .REDUCE
// console.log(movements);

// accumulator é o valor que vai sendo acumulado ao longo do processo

// const balance = movements.reduce(function (acc, cur, i) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// Maior valor valor da matriz movements
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov)
//     return acc;
//   else
//     return mov;
// }, movements[0])

// console.log(max);

// Essa abaixo é a forma que eu considero mais clean e é a forma que eu usaria
// const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0]);
// console.log(max);

// PIPELINE
// console.log(movements);

// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   // .map(mov => mov * eurToUsd)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd
//   })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositUSD);
