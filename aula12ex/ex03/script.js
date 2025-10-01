function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('[ERRO] Verifique os dados novamente')
    } else {
        var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <= 12) {
                //criança
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            }else {
                // idoso
                img.setAttribute('src', 'homemvelho.png')
            }   
        } else {
            gênero = 'Mulher'
            if (idade >=0 && idade <= 12) {
                //criança
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            }else {
                // idoso
                img.setAttribute('src', 'mulhervelha.png')
            } 
        }
    
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.style.textAlign = 'center' // alinhar em js
       res.appendChild(img)
    }
}