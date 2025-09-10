const usuarios = [
    { 
        nome: 'Matheus', 
        email: 'matheus@discipulo.com' 
    },
    { 
        nome: 'Marcos', 
        email: 'marcos@discipulo.com' 
    },
    { 
        nome: 'Lucas', 
        email: 'lucas@discipulo.com' 
    },
    { 
        nome: 'João', 
        email: 'joao@discipulo.com' 
    }
];


function retornaUsuarios (){
    return usuarios;


}

function  adicionarNovoUsuario(nome) {
    usuarios.push(nome);
 

}



module.exports = {
    retornaUsuarios,
    adicionarNovoUsuario
}