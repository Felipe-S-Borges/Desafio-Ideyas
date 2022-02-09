const addAmigo = (amigo) => {
    const db_amigo = JSON.parse(localStorage.getItem('db_amigo')) ?? []
    db_amigo.push(amigo)
    localStorage.setItem("db_amigo",JSON.stringify(db_amigo))
}

const abrirModal = () => document.getElementById('modalCadastro').classList.add('active')

const fecharModal = () => document.getElementById('modalCadastro').classList.remove('active')

const salvarAmigo = () => {
    const amigo = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        telefone: document.getElementById('telefone').value,
        documento: document.getElementById('documento').value
    }
    addAmigo(amigo)
}

const criarLinha = (amigo) => {

    const novaLinha = document.createElement('tr')
    novaLinha.innerHTML = `
    <td>${amigo.nome}</td>
    <td>${amigo.idade}</td>
    <td>${amigo.telefone}</td>
    <td>${amigo.documento}</td>
    `
    document.querySelector('#listaAmiga>tbody').appendChild(novaLinha)
}

const atualizarTabela = () => {
    const db_amigo = JSON.parse(localStorage.getItem('db_amigo')) ?? []
    db_amigo.forEach(criarLinha)
}

atualizarTabela()

document.getElementById('adicionarAmigo').addEventListener('click',abrirModal)
document.getElementById('fecharModal').addEventListener('click',fecharModal)
document.getElementById('salvar').addEventListener('click',salvarAmigo)