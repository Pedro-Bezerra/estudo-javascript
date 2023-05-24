const obj = {
    nome : "Henrique",
    sobrenome: "Marcos",
    get contar() {
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }
    }
}

console.log(`${obj.nome} ${obj.sobrenome}`);
//obj.contar;

function criarPessoa(nome, sobrenome) {
    return {
        teste: nome, //altera a chave do atributo
        sobrenome,
        get contar() {
            for (let i = 1; i <= 10; i++) {
                console.log(i);
            }
        },
        set atualizarNome(nome) {
            this.teste = nome;
        }
    } 
}

const pedro = criarPessoa("Pedro", "Soares");
console.log("\n", pedro);
console.log(pedro.teste, pedro.sobrenome);
//pedro.contar;
pedro.atualizarNome = "Pietro";
console.log(pedro);

function Animal(animal, idade) {
    Object.defineProperty(this, "animal", {
        enumerable:true,
        get: function() {
            return animal;
        },
        set: function(valor) {
            animal = valor;
        }
    });
    Object.defineProperty(this, "idade", {
        enumerable:true,
        get: () => {
            return idade;
        },
        set: (valor) => {
            idade = valor;
        }
    });
}

const animal1 = new Animal('gato', 8);
animal1.animal = "boi";
animal1.idade = 9;
for (let i of Object.values(animal1)) {
    console.log(i);
}
console.log(animal1);

function Pessoa(nome, sobrenome, idade, cpf) {
    Object.defineProperties(this, {
        nome: {
            enumerable:true,
            value:nome,
            writable:true,
            configurable:false
        },
        sobrenome: {
            enumerable:false,
            value:sobrenome,
            writable:true,
            configurable:false
        },
        idade: {
            enumerable:true,
            value: idade,
            writable:true,
            configurable:false
        }
    }
        
    );

    Object.defineProperty(this, "cpf" ,{
       enumerable:true, //permite a visualização da chave
       value:cpf, //atribue o valor do atributo
       writable:false, //responsável pela capacidade de edição do valor
       configurable:false //responsável pela capacidade de reconfiguração do 'Object.defineProperty'
                         //não permite deletar o atributo
    });
}

const pessoa1 = new Pessoa("Luís", "Fernandes", 31, 91023891283);
console.log(pessoa1);
console.log(delete pessoa1.idade);
console.log(pessoa1);

const teste = {nome: "maria", idade:"18"};
const ixi = teste; // aponta pro mesmo lugar na memória
const correto = {...teste}; // faz um cópia do original
const correto2 = Object.assign({}, ixi, {profissao: "Engenheira Petroquímica"});
const indicadoParaPoucasChaves = {nome: teste.nome};

console.log("Impressão inicial:", teste, ixi, correto, correto2, indicadoParaPoucasChaves);
ixi.nome = "fernanda";
correto.nome = "kayo"
console.log("Impressão com mudanças em alguns nomes:", teste, ixi, correto,"| correto2: ",
             correto2, "|",indicadoParaPoucasChaves);
console.log("Impressão das chaves de 'correto2:" , Object.keys(correto2));
Object.freeze(teste);
teste.idade = 0;
console.log("Impressão com a edição cancelada:", teste, ixi);
console.log("Impressão da propriedade de nome do 'teste' e do 'correto':", 
            Object.getOwnPropertyDescriptor(teste, 'nome'),
            Object.getOwnPropertyDescriptor(correto, 'nome'));

for (let [chave, valor] of Object.entries(correto2)) {
    console.log(`${chave}: ${valor}`);
}