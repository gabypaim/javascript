let num = [5,8,2,9,3,]
num [3] =6

num.sort() // deixa em ordem crescente
num.push(1) // se colocar em baixo do sort, ele não entra na ordem pois esta depois

console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
console.log(num[1])

let pos = num.indexOf(4)
if (pos== -1) {
    console.log(`O valor não foi encontrado`)
}
else {
    console.log(`o valor está na posição ${pos}`)
}
