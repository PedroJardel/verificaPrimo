# verificaPrimo
Método que verifica se um número é primo ou não, utilizando DO WHILE

var prompt = require("prompt-sync")()

// @author Pedro Jardel Lima

//Método que consiste em digitar um número e verificar se ele é primo ou não

console.log("Digite um número, ou digite '0' para finalizar ")

var num = Number(prompt("Número: "))
console.log("----------------------------------------------------------------")
var i = 1
do {
    if (num == 0 || num == 1) {
        console.log(`Os Números 0 e 1 não se aplicam à essa regra, por tanto não são primos,\n por que são divisores comuns de todos os números`)
        break
    }
    i++
    if (num == i) {
        if (num % i === 0) {
            console.log(`O número ${num} é primo`)
            break
        }
    } else {
        if (num % i === 0) {
            console.log(`O número ${num} não é primo`)
            break
        }
    }
} while (i <= num)
