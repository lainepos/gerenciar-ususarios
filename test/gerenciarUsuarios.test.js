const { retornaUsuarios, adicionarNovoUsuario } = require ('../src/gerenciarUsuarios');
const { expect } = require ('chai');

describe ('Testar as funções de gestão de usuários', function() {
    it ('Validar que posso adicionar um novo nome de usuário na lista', function() {
        
        // 1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario ({
        
        nome: 'Maria', 
        email: 'maria@discipulo.com' 
            
            
     });

        // 2. Retornar a lista de usuários na caixa Lista de usuários
        const listaDeUsuarios = retornaUsuarios ( );
        console.log('Lista:', listaDeUsuarios);
        
        // 3. Comparar se o novo nome esta no fim da lista de usuários at -1 pega o ultimo item da lista
       
         // expect (listaDeUsuarios.at(-1).nome).to.equal('Maria');
         // expect (listaDeUsuarios.at(-1).email).to.equal('maria@discipulo.com');
            expect (listaDeUsuarios.at(-1)).to.eql({
               nome: 'Maria', 
               email: 'maria@discipulo.com'             
            });
         console.log('Quantidade de usuários:', listaDeUsuarios.length);

    });

});