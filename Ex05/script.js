// Crie dois módulos em arquivos distintos: filtrarPares.js e somaImpares.js.
// No módulo filtrarPares.js, exporte uma função chamada filtrarPares, que recebe um array de números como parâmetro e retorna um novo array contendo apenas os números pares.
// No módulo somaImpares.js, exporte uma função chamada somaImpares, que recebe um array de números como parâmetro e retorna a soma de todos os números ímpares.
// No módulo principal, importe as duas funções e solicite ao usuário que insira um array de números.
// Utilize a função filtrarPares para obter um novo array contendo apenas os números pares do array fornecido pelo usuário.
// Em seguida, utilize a função somaImpares para calcular e exibir no console a soma dos números ímpares do array fornecido pelo usuário.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

import {filtrarPares} from './filtrarPares.js'; 

import {somaImpares} from './somarImpares.js';

console.log(filtrarPares(array));

console.log(somaImpares(array));''