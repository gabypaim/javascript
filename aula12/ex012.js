var agora = new Date()
var hora = agora.getHours()

console.log(`agora são extamante ${hora} horas.`)
if (hora < 12 && hora >5) {
    console.log('Bom Dia!')
} else if (hora <= 5) {
    console.log('Boa Madrugada')  
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log ("Boa noite!")
}