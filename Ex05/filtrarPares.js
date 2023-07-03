// No módulo filtrarPares.js, exporte uma função chamada filtrarPares, que recebe um array de números como parâmetro e retorna um novo array contendo apenas os números pares.

export function filtrarPares(array){
    return array.filter(number => number % 2 == 0);
};
