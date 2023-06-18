const insertionSort = (lista) => {
    let i;
    let valorAtual;
    for (let j = 1; j < lista.length; j++) {
        valorAtual = lista[j];
        i = j - 1;
        while (i >= 0 && lista[i] > valorAtual) {
            lista[i + 1] = lista[i];
            i--;
        }
        lista[i + 1] = valorAtual;
    }
    return lista;
}

console.log(insertionSort([9, 8, 7, 6, 5, 4]))