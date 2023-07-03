// Crie um array com uma lista de objetos, cada um representando um aluno. Cada aluno deve possuir as propriedades nome (string), nota1 (number) e nota2 (number).
// Utilize uma função de array, como map, filter ou reduce, para calcular a média das notas de cada aluno.
// Crie um novo array contendo objetos com as propriedades nome e media, onde media é a média das notas.
// Exiba o array resultante no console, ordenado em ordem decrescente de média.

let array = [
    {nome: 'Antonio', nota1: 8, nota2: 9},
    {nome: 'Carlos', nota1: 7, nota2: 5},
    {nome: 'Pereira', nota1: 10, nota2: 9},
    {nome: 'Neto', nota1: 8, nota2: 7}
];

let mediaAlunos = array.map((aluno) => {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    return { nome: aluno.nome, media: media}
})

console.log(mediaAlunos);

let mediaOrdenada = mediaAlunos.sort(function(x, y){
    return y.media - x.media;
});

console.log(mediaOrdenada)