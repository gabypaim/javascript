function tabuada() {
  let num = document.getElementById('txtnum');
  let tab = document.getElementById('seltab');

  if (num.value.length == 0) {
    window.alert('Por favor digite um número');
  } else {
    let numero = Number(num.value);
    tab.innerHTML = ''; // Limpa a tabela antes de adicionar novos valores

    for (let c = 1; c <= 10; c++) {
      let item = document.createElement('option');
      item.text = `${numero} x ${c} = ${numero * c}`;
      tab.appendChild(item);
    }
  }
}
