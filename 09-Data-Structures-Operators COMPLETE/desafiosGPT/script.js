`use strict`;

// Estou usando esse script para fazer uns desafios do chat-gpt e também para fazer as aulas, pq infelismente me perdi no conteúdo original

/////// Desafio 1 ///////
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

const [colorOne, , colorTwo] = colors;
// console.log(colorOne, ' and ', colorTwo);

/////// Desafio 2 ///////
/* 
const values = [10, 20, 30, 40, 50, 60, 70, 80];
const [first, last] = [values[0], values[7]];
console.log(first, last)
*/
////// OUTRA FORMA //////
const values = [10, 20, 30, 40, 50, 60, 70, 80];
const indexOne = values.indexOf(10);
const indexTwo = values.indexOf(80);
const [x, y] = [values[indexOne], values[indexTwo]]; //Essa forma parece mais complicada, mas funciona quando eu só sei o valur que está na array e n o seu indece.

// console.log(x, y);

/////// Desafio 3 ///////
const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland',
  profession: 'Explorer',
};

const { name: firstName, profession: trabajo } = person;
// console.log(
//   `O nome da person é ${firstName} e ela é ${trabajo}, traduzindo: exploradora`
// );

/////// Desafio 4 ///////
const product = {
  id: 1,
  name: 'Laptop',
  price: 1200,
  brand: 'TechBrand',
  specs: { ram: '16GB', storage: '512GB' },
};

const {
  name: nome,
  price: sla,
  specs: { ram: ram },
} = product;
// console.log(nome, sla, ram);
// POR ENQUATO E SÓ ISSO, ACHO QUE DEU PARA TREINAR UM POUCO //

/*ISSO AÍ EM BAIXO É COISA DE AULA QUE FUI FAZENDO JUNTO PQ ME PERDI NOS MATERIAIS, MAS DÁ NADA N*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ES6 enhanced object literals
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openigHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openigHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// if (restaurant.openigHours && restaurant.openigHours.mon)
// console.log(restaurant.mon.open);

// console.log(restaurant.openigHours.mon.open);

// WITH opening chaining
// console.log(restaurant.openigHours.mon?.open);
// console.log(restaurant.openigHours?.mon?.open);

// Exemplo:
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openigHours[day]?.open ?? 'closed';
  // console.log(`On ${day}, we open at ${open}`)
}

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Ricardo', email: 'hello@ricardo.br' }];
// const users = []
// console.log(users[0]?.name ?? 'user array empty');
// como seria sem o optional chaining e sem o coalescing operador
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty')

// const [pizza, , risotto, ...outraComida] = [...restaurant.mainMenu, ...restaurant.starterMenu ];
// console.log(pizza, risotto, outraComida);

// const { sat: fds, ...weekDays } = restaurant.openigHours;
// console.log(fds, weekDays);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const add = function (...numbers) {
//   let num = 0;
//   for (let i = 0; i < numbers.length; i++) num += numbers[i];
//   console.log(num);
// };
// add(1, 2, 3, 4, 12);
// add(3, 3, 3, 3, 3, 3);
// add(666, 1);

// const qualquer = [1, 3];
// add(...qualquer);

// const ingredients = [];

// while (true) {
//   const ingredient = prompt(
//     "Quais os outros ingredientes? (Digite 'não' para parar)"
//   );

//   // Verifica se o usuário quer parar de adicionar ingredientes
//   if (ingredient.toLowerCase() === 'não' || ingredient.toLowerCase() === 'sair')
//     break;

//   // Adiciona o ingrediente ao array
//   ingredients.push(ingredient);
// }

// // Passa os ingredientes coletados para a função orderPizza
// restaurant.orderPizza('macarrão', ...ingredients);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Operadores lógicos podem usar qualquer tipo de dados; number, string, boolean e por aí vai. Eles podem retornar qualquer tipo de dado. Eles fazem algo chamado de curto=-circuito

// console.log('----- OR -----');
// console.log(1 || 'Ricardo');
// console.log('' || 'Ricardo');
// console.log(true || 0);
// console.log(null || undefined);

// console.log(undefined || 0 || '' || 'hello' || 18 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('----- AND -----');
// console.log(0 && 'Ricardo');
// console.log(2 && 'Ricardo');

// console.log('hello' && 23 && null && 'Ricardo');

// exemplo prático
// if (restaurant.orderPizza) {
// restaurant.orderPizza('mashrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mashrooms', 'spinach');
// O operador '||' retornará o primeiro valor verdadeiro de todos os operandos, ou simlesmente o ultimo valor se todos eles forem falsos.
// Por outro lado, o operador '&&' retornará o primeiro valor falso, ou simplesmente o ultimo valor se todos forem verdadeiros.
// Quanto as aplicações práticas, podemos usar o operador '||' para definir os valores padrão e podemos usar o operador '&&' para executar o código no segundo operando se o primeiro for verdadeiro.

// esses operadores acima são muito bons mas n posso simplismente trocar todos os "if and else" dos meus códigos porque senão eles ficarão muito dificeis de ler no futuro

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// restaurant.numGuest = 0;
// const guest = restaurant.numGuest || 10;
// console.log(guest);

// Pelo que entendi esse operador funciona com principios nos valores nulos como (NULL and UNDEFINED) não trabalha com 0 e '' pelo que parece
// const guestCorreto = restaurant.numGuest ?? 10;
// console.log(guestCorreto);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const rest1 = {
  name: 'Capuccino Comic Operadors',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Haters of Capuccino Comic',
  owner: 'Giovanni Rossi',
};

// OR assignment operador //
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuest = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operador (null or undefined)//
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operador //
// rest1.owner = rest1.owner && 'ANONYMOUS';
// rest2.owner = rest2.owner && 'ANONYMOUS';

// rest1.owner &&= 'ANONYMOUS';
// rest2.owner &&= 'ANONYMOUS';

// console.log(rest1);
// console.log(rest2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
/*
Desafio de Codificação #1
Estamos criando um aplicativo de apostas de futebol (ou "soccer" para os amigos americanos 😅)!

Suponha que recebemos os dados de um serviço web sobre um determinado jogo (abaixo). Neste desafio, vamos trabalhar com esses dados. Aqui estão as tarefas:

1. Crie um array de jogadores para cada time (variáveis players1 e players2). ✔️
2. O primeiro jogador em qualquer array de jogadores é o goleiro, e os outros são os jogadores de campo. Para o Bayern de Munique (time 1), crie uma variável (gk) com o nome do goleiro e um array (fieldPlayers) com os 10 jogadores de campo restantes. ✔️
3. Crie um array allPlayers contendo todos os jogadores dos dois times (22 jogadores). ✔️
4. Durante o jogo, o Bayern de Munique (time 1) usou 3 jogadores substitutos. Então, crie um novo array (players1Final) contendo todos os jogadores originais do time 1 mais 'Thiago', 'Coutinho' e 'Perisic'. ✔️
5. Com base no objeto game.odds, crie uma variável para cada odd (chamadas team1, draw e team2). ✔️
6. Escreva uma função (printGoals) que recebe um número arbitrário de nomes de jogadores (NÃO um array) e imprime cada um deles no console, junto com o número total de gols que foram marcados (número de nomes de jogadores passados para a função). ✔️
7. O time com a odd mais baixa tem mais chances de ganhar. Imprima no console qual time tem mais chances de vencer, SEM usar uma instrução if/else ou o operador ternário. ✔️
DADOS DE TESTE PARA A TAREFA 6
Use os jogadores 'Davies', 'Muller', 'Lewandowski' e 'Kimmich'. Depois, chame a função novamente com jogadores do game.scored.

Boa sorte! 😀
*/
// VOU PEDIR PARA O CHAT GPT FAZER UM DESAFIO COM OS COISAS DAQUI DE CIMA E OS DADOS PARA QUE EU POSSA COMPLETAR, MAS ISSO É SÓ DEPOIS, AGORA VOU DESCANSAR (17-11-2024 '20:14PM') <- já pedi rsrsrs

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnabry',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     draw: 3.25,
//     team2: 6.5,
//   },
// };

// const [player1, player2] = game.players; // 1.✔️
// const [gk, ...fieldPlayers] = player1; // 2.✔️
// const allPlayers = [...player1, ...player2]; // 3.✔️
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic']; // 4.✔️
// const { team1, draw, team2 } = game.odds; // 5.✔️

//errei um pouco mas entendi tanto meu erro quanto a forma de concerta-lo
// const printGoals = function(...players) {
// for (let i = 0; i < players.length; i++) {
// console.log(players[i]);
// }
// console.log(`Total de goals scored: ${players.length}`);
// };
//printGoals(...player1); // 6. ✔️

// team1 < team2 && team1 < draw && console.log(`${game.team1} é mais provável de vencer`);
// team2 < team1 && team2 < draw && console.log(`${game.team2} é mais provável de vencer`);
// draw < team1 && draw < team2 && console.log(`É fácil dá empate`); // 7. ✔️

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Esse é o loop normal
for (let i = 0; i < menu.length; i++) {
  const element = menu[i];
  //  console.log(element);
}

// Esse é o for-of loop
const palavra = 'javascript';
// for (const letra of palavra) console.log(letra);

// E se também quiséssemos o índece atual e não apenas o elemento atual?
for (const item of menu.entries()) {
  // console.log(`${item[0] + 1}: ${item[1]}`);
}
// console.log([...menu.entries()])

//podemos usar a desestuturação agora diretamente no array
for (const [num, elem] of menu.entries()) {
  // console.log(`${num + 1}: ${elem}`)
  // console.log(num);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Property NAMES
const properties = Object.keys(openigHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
// console.log(openStr);

// Property VALUES
const valores = Object.values(openigHours);
// console.log(valores);

// Entire object
const entries = Object.entries(openigHours);
// console.log(entries);

// [key, values]
for (const [key, { open, close }] of entries) {
  // console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Percorra o array game.scored e imprima o nome de cada jogador no console, junto com o número do gol (Exemplo: "Gol 1: Lewandowski"). ✔️
2. Use um loop para calcular a média das odds e mostre o resultado no console (Já vimos como calcular médias; você pode revisar se não lembrar).
3. Imprima as 3 odds no console, mas de uma forma bem formatada, exatamente assim:
      Odd de vitória Bayern Munich: 1.33
      Odd de empate: 3.25
      Odd de vitória Borrussia Dortmund: 6.5
Pegue os nomes dos times diretamente do objeto game, sem colocar os nomes fixos no código (exceto para "empate"). Dica: Note que as propriedades de odds e do objeto game têm os mesmos nomes. 😉

BÔNUS: Crie um objeto chamado 'scorers', que contenha os nomes dos jogadores que marcaram gols como propriedades, e o número de gols como valor. Para este jogo, o objeto ficará assim:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. ✔️ <- esse eu fiz só
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Gol ${i + 1}: ${player}`);
// }

// 2. ✔️ <- meia ajuda nesse
// const odds = Object.values(game.odds);
// let sum = 0;
// for (const media of odds) {
//   sum += media;
// }
// const calcM = sum / odds.length;
// console.log(`A média das odds é: ${calcM}`);

// 3. ✔️ <- n fiz tudo e na verdade minha solção n funcionou.
// const odds = game.odds;
// const team1 = game.team1;
// const team2 = game.team2;
////////////////////////////////////////////////////////////////////////
// 3. ☑️
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// console.log(`Odd de vitória ${team1}: ${odds.team1}`);
// console.log(`Odd de empate: ${odds.x}`);
// console.log(`Odd de vitória ${team2}: ${odds.team2}`);

// BONUS. ✖️ <- fooi o chat-gpt que fez. Realmente esse desafio está bem dificil
// const scorers = {};

// for (const player of game.scored) {
//   scorers[player] && scorers[player]++;
//   scorers[player] || (scorers[player] = 1);
// }

// console.log(scorers);

//////////////////////////////////////O próximo desafio eu tenho que fazer sozinho, me desafio a isso.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Sets
const ordersSets = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

// console.log(ordersSets);
// console.log(ordersSets.size);
// console.log(ordersSets.has('Pizza'));
// console.log(ordersSets.has('Bread'));
ordersSets.add('Pão de Alho');
// console.log(ordersSets);
ordersSets.delete('Risotto');
// ordersSets.clear();
// console.log(ordersSets);

// for (const order of ordersSets) console.log(order);

//Caso de uso:
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//DESAFIOS DO CHAT-GPT;
//  Challange One: - Escreva uma função chamada somaPares que recebe um array de números como parâmetro. A função deve retornar a soma de todos os números pares no array.

const arr = [1, 2, 3, 4, 5, 6];
function somaPares(numeros) {
  let soma = 0;

  for (const numero of numeros) {
    if (numero % 2 === 0) {
      soma += numero;
    }
  }

  return soma;
}
// console.log(somaPares(arr));

//  challange two: - Você recebeu uma lista de usuários como objetos e precisa filtrar apenas aqueles com mais de 18 anos. Crie uma função filtrarMaioresDeIdade que recebe um array de objetos (cada um representando um usuário com nome e idade) e retorna apenas os usuários com idade maior ou igual a 18.

const usuarios = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Carlos', idade: 22 },
  { nome: 'João', idade: 15 },
  { nome: 'Mariana', idade: 19 },
];

function usuariosAdultos(users) {
  return users.filter(user => user.idade >= 18);
}

// console.log(usuariosAdultos(usuarios));

//  challange three: - Escreva uma função chamada contarCaracteres que recebe uma string e retorna um objeto. O objeto deve conter como chave cada caractere da string e como valor o número de vezes que ele aparece.
function contarCaracteres(str) {
  const resultado = {};

  for (const char of str) {
    resultado[char] = (resultado[char] || 0) + 1;
  }

  return resultado;
}

// console.log(contarCaracteres('javascript'));

// Final challenge;
function frequenciaPalavras(str) {
  // Passo 1: Converter a string para minúsculas e remover pontuação
  let fraseTratada = str.toLowerCase().replace(/[^\w\s]/g, '');

  // Passo 2: Quebrar a string em palavras
  let palavras = fraseTratada.split(' ');

  // Passo 3: Contar a frequência das palavras
  let contagem = {};

  // Contar as ocorrências de cada palavra
  for (let palavra of palavras) {
    if (contagem[palavra]) {
      contagem[palavra] += 1;
    } else {
      contagem[palavra] = 1;
    }
  }

  // Passo 4: Ordenar as palavras em ordem alfabética
  let palavrasOrdenadas = Object.keys(contagem).sort();

  // Passo 5: Criar um objeto final com as palavras ordenadas e suas contagens
  let resultado = {};
  for (let palavra of palavrasOrdenadas) {
    resultado[palavra] = contagem[palavra];
  }

  return resultado;
}

// console.log(frequenciaPalavras('Javascript, JavaScript; javascript!'));
// Saída esperada: { javascript: 3 }

///////////////DÁ UMA OLHADA NISSO AÍ EM CIMA PREGUIÇOSO DO CRL

///////// Eu do futuro; ah que saco, vou estudar que eu ganho mais.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//MAPS
const rest = new Map();
7;
rest.set('nome', 'Barzinho da Zuleide');
rest.set(1, 'Na esquina que leva pra casa de Zé Gavião');
// console.log(rest.set(2, 'Na jojoba'));

rest
  .set('categorias', [
    'Coxinha',
    'Pastel',
    'Bomba',
    'Bolo de fubá',
    'Cervejas',
    'Caldo de Cana',
    'Sucos',
    'Refrigerantes',
  ])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

// console.log(rest.get('nome'));
// console.log(rest.get(true));

const time = 22;
// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// console.log(rest.has('categorias'));
rest.delete(2);
// console.log(rest.get('nome'));
rest.set([1, 2], 'test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// rest.clear();
// console.log(rest.size);

const array = [1, 2];
rest.set(array, 'Test');
// console.log(rest.get(array));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const question = new Map([
  ['Question', 'What is the bast programing linguage in the world?'],
  [1, 'C'],
  [2, 'JAVA'],
  [3, 'Javascript'],
  [4, 'All'],
  ['correct', 4],
  [true, 'correct 🎉'],
  [false, 'Try again!'],
]);
// console.log(question);

// convert object to map
// console.log(Object.entries(openigHours));
const hoursMap = new Map(Object.entries(openigHours));
// console.log(hoursMap);

//Quiz app;
console.log(question.get('Question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Sua resposta'));
// console.log(question.get(question.get('correct') === answer))


// Iterações
const myMap = new Map([
  ['nome', 'Ricardão'],
  ['sobrenome', 'Silva'],
  ['idade', 18],
]);
for (const [key, value] of myMap) {
  // console.log(`${key}, ${value}`);
}


// Convert map to arr;
// console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
