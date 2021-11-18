
function clicar() {
    var bt = document.getElementById('btn')
    var nome = window.prompt('Qual é o seu nome?')
    var idade = window.prompt(`Olá ${nome}! Quantos anos você tem?`)
    window.alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)

}