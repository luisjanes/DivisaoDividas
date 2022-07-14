function calcular(){
    let pessoas = document.getElementById('numPessoas').value
    let valor = document.getElementById('inValor').value
    let valorDividido = 0
    var divisaoValor = document.getElementById('outValorDividido')
    if (pessoas == 0 || valor == 0){
        alert('Digite um valor válido...')
        return
    }
    valorDividido = valor/pessoas
    divisaoValor.innerHTML = `O valor para cada um ficou R$${valorDividido.toFixed(2)}`
}