let numeros = [1,6,4,5]

let maior = numeros[0];
let menor = numeros[0];

for (let pos in numeros) {
            if (numeros[pos] > maior)
                 maior = numeros[pos];
            if (numeros[pos] < menor)
                 menor = numeros[pos];
        }

        console.log(`O maior valor informado foi ${maior}.`)
        console.log(`O menor valor informado foi ${menor}.`)