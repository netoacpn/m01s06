// No módulo somaImpares.js, exporte uma função chamada somaImpares, que recebe um array de números como parâmetro e retorna a soma de todos os números ímpares.

export function somaImpares(array){
    return array.filter(number => number % 2 !== 0)
        .reduce((acumulator, current) => acumulator + current, 0);
};