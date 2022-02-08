function insertOnTable(){
    console.log('work')
}

const abrirModal = () => document.getElementById('modalCadastro').classList.add('active')

const fecharModal = () => document.getElementById('modalCadastro').classList.remove('active')

document.getElementById('adicionarAmigo').addEventListener('click',abrirModal)
document.getElementById('fecharModal').addEventListener('click',fecharModal)