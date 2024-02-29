const luiz = {
    idade: 25,
    peso: 60,
    nome: 'Luiz',
    genero: 'Masculino',
    nacionalidade: 'Brasileiro',
    endereco: 'Rua ',
    numero: 432,
    pais: 'Brasil',
    temFilhos: false,
}

const exibirInformacoes = (pessoa, qualInformacao) => {
    console.log(`${qualInformacao} do(a) ${pessoa.nome}:`, pessoa[qualInformacao]);
}

exibirInformacoes(luiz, 'pais')