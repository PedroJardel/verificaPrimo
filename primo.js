var prompt = require("prompt-sync")()

// @author Pedro Jardel Lima

/*
Método que consiste em digitar um número e verificar
 se ele é primo ou não
*/
console.log("Digite um número, ou digite '0 ou 1' para finalizar ")

var i = 1
var contador = 1 
var num = Number(prompt("Número: "))
console.log("-".repeat(40))

do {
    if(num == 0 || num == 1){
        break
    }
    if (num % i == 0) {
        contador++
    }
    i++
} while (i <= num / 2)

if (contador == 1) {
    console.log(`O número ${num} é primo`)
    console.log("=".repeat(40))
    console.log("Obrigado por utilizar nosso programa")
    console.log("=".repeat(40))
} else {
    console.log(`O número ${num} não é primo`)
    console.log("=".repeat(40))
    console.log("Obrigado por utilizar nosso programa")
    console.log("=".repeat(40))
}

// Outra forma de se fazer essa validação

var num = Number(prompt("Número: "))
var contador = 0
if (num != 0 && num != 1) {
    for (var i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            contador++
        }
    }
    if ( contador == 1) {
       console.log(`O número ${num} é primo`)
       console.log("=".repeat(40))
       console.log("Obrigado por utilizar nosso programa")
       console.log("=".repeat(40))
    } else {
       console.log(`O número ${num} não é primo`)
       console.log("=".repeat(40))
       console.log("Obrigado por utilizar nosso programa")
       console.log("=".repeat(40))
    }
} else {
    console.log("=".repeat(40))
    console.log("Obrigado por utilizar nosso programa")
    console.log("=".repeat(40))
}

