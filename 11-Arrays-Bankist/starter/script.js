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
// BANKIST APP

// Data

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

const createUsernames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join("");
  })
}
createUsernames(accounts);
console.log(accounts);

//////////////////////////////////////////////////////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

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

// DESSA FORMA ENSINADA NA AULA, NÃO TEMOS UM EFEITO
// const movementsDescriptions = movements.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);
// console.log(movementsDescriptions);