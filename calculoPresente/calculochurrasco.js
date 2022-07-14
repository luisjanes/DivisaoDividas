let nomes = []
var valorDividido = document.getElementById('outValor')
//função para guardar os nomes no array e fazer as verificações
function guardar(){
    let inNome = document.getElementById('inNome')
    let verificar = nomes.indexOf(inNome.value)
    if(inNome.value == '' || !isNaN(inNome.value)){
        alert('Por favor digite um nome...')
        inNome.focus()
        return
    }
    if(verificar == -1){
        nomes.push(inNome.value)
        inNome.value = ''
        inNome.focus()
        console.log(nomes)
        outMsg.innerHTML = ''
    } else {
        alert('Esse nome já foi cadastrado...')
        inNome.focus()
    }
    listar()
}
//Exclui o ultimo nome da lista
function excluir(){
    if(nomes.length <= 0){
        alert('Não existem nomes para excluir...')
        inNome.focus()  
    } else {
        nomes.pop()
        listar()
    }
    
}
//função que vai colocar a lista na tela
function listar(){
    if(nomes.length < 0){
        alert('Não existem nomes para listar...')
        inNome.focus()  
    } else {
        let lista = ''
        let outMsg = document.getElementById('outMsg')
        for(let i = 1; i<=nomes.length; i++){
        lista += `${i} - ${nomes[i-1]} \n`
        }
    outMsg.innerHTML = lista
    }  
}
//função que coloca os nomes em ordem alfabética
function ordem(){
    if(nomes.length <= 0){
        alert('Não existem nomes para ordenar...')
        inNome.focus()  
    } else {
        nomes.sort()
        listar()
    }
}
//função para calcular os valores de cada elemento
function calcular(){
    var valorPresente = document.getElementById('inValorPresente').value
    let pessoas = nomes.length

    if(pessoas == 0){
        alert('Não há pessoas na lista...')
        return
    } else {
        valorDividido = valorPresente/pessoas
    outValor.innerHTML = `O valor para cada um ficou R$${valorDividido.toFixed(2)}`
    }
}