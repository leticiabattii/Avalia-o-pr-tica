let usuarios = [];

function validarUsuario(usuario) {
    if (!usuario || typeof usuario !== 'object') {
        alert('Dados do usuário inválidos.');
        return false;
    }

    const { nome, email, idade } = usuario;

    if (!nome || typeof nome !== 'string' || nome.trim() === '') {
        alert('Nome inválido.');
        return false;
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
        alert('Email inválido.');
        return false;
    }

    if (!idade || typeof idade !== 'number' || idade <= 0) {
        alert('Idade inválida.');
        return false;
    }

    return true;
}

function adicionarUsuario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const idade = parseInt(document.getElementById('idade').value.trim(), 10);

    const usuario = { nome, email, idade };

    if (validarUsuario(usuario)) {
        usuarios.push(usuario);
        atualizarListaUsuarios();
        limparCampos();
        alert('Usuário adicionado com sucesso!');
    }
}



function atualizarListaUsuarios() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '<h2>Usuários Cadastrados:</h2>';

    if (usuarios.length === 0) {
        userList.innerHTML += '<p>Nenhum usuário cadastrado.</p>';
        return;
    }

    usuarios.forEach((usuario, index) => {
        userList.innerHTML += `
            <div>
                <strong>Usuário ${index + 1}:</strong>
                <p>Nome: ${usuario.nome}</p>
                <p>Email: ${usuario.email}</p>
                <p>Idade: ${usuario.idade}</p>
            </div>
        `;
    });
}
