let num = document.getElementById('txtnum');
let list = document.getElementById('listid');
let res = document.getElementById('ares');


let numeros = []

function adicionar() {
    ares.style.display = "none";
    
    let n = Number(num.value);

    if (n.length == 0) {
        window.alert('Porfavor digite um número');
        
    } else if (n < 1 || n > 100) {
        window.alert('Número Inválido!');

    } else if (numeros.includes(n)) {
        window.alert('Número já adicionado!');


    } else {
        numeros.push(n);
       
        let item = document.createElement('option');
        item.text = `valor ${n} adicionado`;
        list.appendChild(item);
    }

    num.value = '';
    num.focus();

}
    

   function finalizar() {

    if (numeros.length == 0) {
        window.alert('Adicione um número');
        return; 
    }
    
    ares.style.display = "block";
    res.innerHTML = `
        <p>Ao todo, temos ${numeros.length} números cadastrados.</p>
        <p>O maior valor informado foi ${Math.max(...numeros)}.</p>
        <p>O menor valor informado foi ${Math.min(...numeros)}.</p>
        <p>Somando todos os valores temos ${numeros.reduce((a,b)=>a+b,0)}.</p>
        <p>A média dos valores digitados é ${numeros.reduce((a,b)=>a+b,0)/numeros.length}.</p>
    `;
}

        
        
        
        
        
    


