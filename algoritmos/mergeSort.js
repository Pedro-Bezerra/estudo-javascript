mergeSort = (lista) => {
    console.log("Splitting:", lista);
    if (lista.length < 2) {
        return lista;
    }   
    const halfIndex = Math.floor(lista.length / 2);
    const leftHalf = mergeSort(lista.slice(0, halfIndex));
    const rightHalf = mergeSort(lista.slice(halfIndex));
    return merge(leftHalf, rightHalf);
}

merge = (left, right) => {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    while (left.length) {
        sortedArr.push(left.shift())
    }

    while (right.length) {
        sortedArr.push(right.shift())
    }
    console.log("Merging:", sortedArr)
    return sortedArr;
}

let vetor = [5, 4, 3, 2, 1];
console.log(mergeSort(vetor));