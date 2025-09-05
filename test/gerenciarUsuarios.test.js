const { retornaUsuarios, adicionarNovoUsuario } = require ('../src/gerenciarUsuarios');
const { expect } = require ('chai');

describe ('Testar as funções de gestão de usuários', function() {
    it ('Validar que posso adicionar um novo nome de usuário na lista', function() {
        
        // 1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario ('Maria');

        // 2. Retornar a lista de usuários na caixa Lista de usuários
        const listaDeUsuarios = retornaUsuarios ( );

        // 3. Comparar se o novo nome esta no fim da lista de usuários at -1 pega o ultimo item da lista
        console.log('Lista:', listaDeUsuarios);
        expect (listaDeUsuarios.at(-1)).to.equal('Maria');
      

    });



});