
function clicar() {

var bt = document.getElementById('btn')
var num = parseInt(window.prompt('Digite um número qualquer:'))
var ant = num - 1
var suc = num + 1
window.alert(`Antes de ${num} temos o número ${ant}! Depois de ${num} temos o número ${suc}!`)

}