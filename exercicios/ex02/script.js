function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 2
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 4 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#F4F0C6'


        document.querySelectorAll("body a").forEach(link => {link.style.color = "#be8233ff";})

        document.querySelectorAll("footer p").forEach(paragrafo => {paragrafo.style.color = "#1a3655ff";});

        document.querySelectorAll("body h1").forEach(titulo => {titulo.style.color ="#d8b281ff";});

        document.body.className = "manha"

    } else if (hora >=12 && hora < 18 && hora != 0) {
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#511010'

        document.querySelectorAll("body a").forEach(link => {link.style.color = "#df8480ff";})

        document.querySelectorAll("footer p").forEach(paragrafo => {paragrafo.style.color = "#ff3f4fff";});

        document.querySelectorAll("body h1").forEach(titulo => {titulo.style.color ="#ffffffff";});



    } else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#1C1211'

        document.querySelectorAll("body a").forEach(link => {link.style.color = "#804340ff";})
    }
    
}
