/*
**      PROTOTYPES SERVE COMO UM TIPO DE SUPERCLASSE PARA OS OBJETOS 
**      ASSIM, É POSSÍVEL SETAR AS FUNÇÕES DE TODOS OBJETOS DAQUELA CLASSE ATRAVÉS DELE
**      SEM PRECISAR ATRIBUIR AS MESMAS FUNÇÕES A CADA OBJETO, O QUE PIORA O DESEMPENHO
**      DA APLICAÇÃO.
**      O JS PROCURA POR AQUELE MÉTODO EM DIFERENTES MOTORES, AUMENTANDO O ESCOPO A CADA NOVO
**      MOTOR. POR EXEMPLO: COMEÇA PROCURANDO NO PROTOTYPE DAQUELE OBJETO, SE NÃO TIVER,
**      ELE VAI ATRÁS DO PROTOTYPE NA HIERARQUIA SUPERIOR.
*/
const obj = {
    nome: 'Maria',
    saudar: () => {
        console.log(`Oi, ${obj.nome}`);
    }
}

const obj2 = {
    idade: 19,
    falarIdade: () => {
        console.log(idade);
    }
}

const obj3 = {
    chaveC: 'c'
}

Object.setPrototypeOf(obj2, obj);
Object.setPrototypeOf(obj3, obj2);
obj2.nome = "Alina";
console.log(obj2);
obj.saudar();

function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.desconto = function(valor) {
    return this.preco - (this.preco * (valor / 100));
}

const pr = new Produto("TV", 50000);
console.log(pr);

console.log(pr.desconto(10));
