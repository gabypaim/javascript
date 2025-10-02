function contar() {
    var inicio = document.getElementById('txtvar')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

    if (Number(passo.value) == 0 || Number(fim.value) == 0 || Number(inicio.value) == 0) { 
        window.alert('Verifique os dados novamente. O passo deve ser maior que zero!')
        res.innerHTML = ('impossivel contar')
    } else {
        res.innerHTML = "Contando:"
        if ( Number(inicio.value) < Number(fim.value) ) {
            //contagem crescente
            for (var c = Number(inicio.value); c <= Number(fim.value); c += Number(passo.value)) {
            res.innerHTML += `${c} 🍥`
            }
        } else { 
            //contagem regressiva
            for (var c = Number(inicio.value); c >= Number(fim.value); c -= Number(passo.value)) {
                 res.innerHTML += `${c} 🍥`
            }
        }

        

        res.innerHTML += "🏁"
    }
}