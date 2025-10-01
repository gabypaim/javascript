let num = document.getElementById('txtnum');
let list = document.getElementById('listid');
let res = document.getElementById('ares');

let numeros = [];

function inLista(n, l) {
    return l.indexOf(Number(n)) != -1;
}

function adicionar() {
    let n = Number(num.value);

    if (num.value.length == 0) {
        window.alert('Por favor digite um número');
    } else if (inLista(n, numeros)) {
        window.alert('Número já adicionado!');
    } else if (n < 1 || n > 100) {
        window.alert('Número Inválido!');
    } else {
        numeros.push(n);

        let item = document.createElement('option');
        item.text = `Valor ${n} adicionado`;
        list.appendChild(item);
    }

    num.value = '';
    num.focus();
}

function finalizar() {
    if (numeros.length == 0) {
        window.alert('Adicione um número');
    } else {
        let tot = numeros.length;
        let maior = numeros[0];
        let menor = numeros[0];
        let soma = 0;

        for (let pos in numeros) {
            soma += numeros[pos];
            if (numeros[pos] > maior) maior = numeros[pos];
            if (numeros[pos] < menor) menor = numeros[pos];
        }

        let media = soma / tot;

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
}


    
    
        
        
        
        
    


