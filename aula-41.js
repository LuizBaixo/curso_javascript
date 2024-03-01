class Produto {
    nome;
    preco;
    descrica;
    codigo;
    quantidade_em_estoque;

    alterarPreco(novoPreco) {
        if (novoPreco >= 0) {
            this.preco = novoPreco;
        }
    }


    adicionarEstoque(quatidade){
        this.quantidade_em_estoque += quatidade;
    }
    
    removerEstoque(quatidade){
        const novoEstoque = this.quantidade_em_estoque - quatidade;
        if (novoEstoque >= 0){
            this.quantidade_em_estoque = novoEstoque;
        }
    }

    constructor(nome, preco, descrica, codigo, quantidade_em_estoque) {
        this.nome = nome;
        this.preco = preco;
        this.descrica = descrica;
        this.codigo = codigo;
        this.quantidade_em_estoque = quantidade_em_estoque;
    }
} 

class Smartphone extends Produto {
    marca;
    modelo;
    sistema_operacional;

    constructor(nome, preco, descrica, codigo, quantidade_em_estoque, marca, modelo, sistema_operacional) {
        super(nome, preco, descrica, codigo, quantidade_em_estoque);
        this.marca = marca;
        this.modelo = modelo;
        this.sistema_operacional = sistema_operacional;
    }

}

const smartphone1 = new Smartphone('Iphone', 5000, 'Iphone 12', 1, 10, 'Apple', '12', 'IOS');

console.log(smartphone1);

smartphone1.alterarPreco(4000);
smartphone1.adicionarEstoque(5);

console.log(smartphone1.quantidade_em_estoque);

smartphone1.removerEstoque(3);

console.log(smartphone1);

