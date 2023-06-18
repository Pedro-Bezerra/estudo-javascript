const bubbleSort = (lista) => {
    let isSwap = false;
    for (let i = 0; i < lista.length - 1; i++) {
        for (let j = 0; j < lista.length - i - 1; j++) {
            if (lista[j] > lista[j+1]) {
                [lista[j], lista[j+1]] = [lista[j+1], lista[j]];
                isSwap = true;
            }
        }
        if (!isSwap) {
            break;
        }
    }
    return lista;
}

console.log(bubbleSort([9, 6, 4, 0, 1, 4]));