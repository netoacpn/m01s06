// Crie uma classe chamada Livro com as propriedades titulo (string), autor (string) e anoPublicacao (number).
// Implemente um método na classe chamado obterInformacoes, que retorna uma string formatada com as informações do livro.
// Crie três objetos da classe Livro, cada um representando um livro diferente.
// Exiba no console as informações de cada livro, utilizando o método obterInformacoes.

class Livro{
    constructor(titulo, autor, anoPublicacao){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    obterInformacoes(){
        return console.log(`O livro ${this.titulo}, foi escrito por ${this.autor}, e foi lançado no ano de ${this.anoPublicacao}.`)
    }
};

let donQuixote = new Livro("Don Quixote", "Miguel de Cervantes", 1605);

let umContoDeDuasCidades = new Livro("Um Conto de Duas Cidades", "Charles Dickens", 1859);

let oSenhorDosAneis = new Livro("O Senhor dos Anéis", "J. R. R. Tolkien", 1954);

let oPequenoPrincipe = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943);

donQuixote.obterInformacoes();

umContoDeDuasCidades.obterInformacoes();

oSenhorDosAneis.obterInformacoes();

oPequenoPrincipe.obterInformacoes();