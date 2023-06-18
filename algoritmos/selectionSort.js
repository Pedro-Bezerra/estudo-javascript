selectionSort = (lista) => {
    let maximoIndex = 0;
    for (let i = lista.length-1; i >= 0; i--) {
        for (let j = 0; j < i+1; j++) {
            if (lista[maximoIndex] < lista[j]) {
                maximoIndex = j;
            }
        }
        [lista[maximoIndex], lista[i]] = [lista[i], lista[maximoIndex]]
    }
    return lista;
}

console.log(selectionSort([6, 0, 4, 3, 1, 0, 2]));