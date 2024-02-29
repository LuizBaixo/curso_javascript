const mensagem = 'zcaascaa sffwef';
const mensagem2 = 'fewfwefwewegwetwer';

console.log('tamanho: ', mensagem.length);
console.log('Concat', mensagem.concat(mensagem2));
console.log('Concat +', "dshdjsh" + " " + mensagem + " " + mensagem2);
console.log('ES:', `dshdjsh ${mensagem} ${mensagem2}`);
console.log('Quebrar em array', mensagem.split(' '));

console.log('UP:', mensagem.toUpperCase());
console.log('DOWN:', mensagem.toLowerCase());
console.log('Replace: ', mensagem.replace('sffwef', 'BAIXO'));