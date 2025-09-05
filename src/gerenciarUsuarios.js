const usuarios = ['Matheus', 'Marcos', 'Lucas', 'João'];

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