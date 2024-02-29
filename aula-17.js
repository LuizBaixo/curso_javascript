

function teste(key) {
    switch (key) {
        case 'Baixo':
        case 'BRIGADEIRO':
            console.log('BAIXO AQUI')
            break;
        case 'Jose':
            console.log('Jose AQUI')
            break;
        case 'Joao':
            console.log('Joao AQUI')
            break;
        default:
            console.log('QUALQUER OUTRO AQUI')
            break;
    }
}

teste('BRIGADEIRO')