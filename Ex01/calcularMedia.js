//No módulo calculaMedia.js, exporte uma função chamada calculaMedia, que recebe um array de números como parâmetro e retorna a média aritmética desses números.

export function calculaMedia(array) {
    return (array.reduce((acumulator, current) => acumulator + current, 0))/array.length;
}