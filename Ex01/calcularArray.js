//No módulo somaArray.js, exporte uma função chamada somaArray, que recebe um array de números como parâmetro e retorna a soma de todos os elementos.

export function somaArray(array){
    return array.reduce((acc, current) => acc + current, 0);
};