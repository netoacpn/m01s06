//No módulo multiplicaArray.js, exporte uma função chamada multiplicaArray, que recebe um array de números como parâmetro e retorna a multiplicação de todos os elementos.

export function multiplicaArray(array) {
    return array.reduce((acc, current) => acc * current, 1);
}