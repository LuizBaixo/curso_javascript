const idade = 23;

const exibirIdade = () => {
    const idade = 25;
    console.log(idade);
}

const exibirExibirIDade = () => {
    exibirIdade();
    console.log(idade);
}


exibirExibirIDade();