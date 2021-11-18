function clicar() {
    let produto = window.prompt('Que produto você está comprando?')
    let valor = Number.parseFloat(window.prompt(`Quanto custa o ${produto} que você está comprando?`))
    let dinheiro = Number.parseFloat(window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    let troco = dinheiro - valor
    window.prompt(`Você comprou ${produto} que custou R$ ${valor}. Deu R$ ${dinheiro} em dinheiro e vai receber R$ ${troco} de troco. Volte sempre!`)
}