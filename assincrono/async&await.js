function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function sayMsg(msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") {
            reject(new Error("Tipo de dado incorreto"));
        }
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

/* usando o async e o await pode substituir tudo isso
sayMsg("Olá!", rand(1, 3))
    .then(answer => {
        console.log(answer);
        return sayMsg(100, rand(1, 3))
    })
    .then((answer) => {
        console.log(answer);
        return sayMsg("Tchau!", rand(1, 3));
    })
    .then(answer => {
        console.log(answer);
    })
    .then(() => {
        console.log("Acabou!")
    })
    .catch(e => {
        console.log(e);
    });*/

async function executa() {
    try {
        const first = await sayMsg("Ínicio", rand(1, 3));
        console.log(first);

        const second = await sayMsg("Meio", rand(1, 3));
        console.log(second);

        const third = await sayMsg("Fim", rand(1, 3))
        console.log(third);

        const fourth = sayMsg("Pendente", rand(1, 3));
        console.log(fourth);

        const fifth = await sayMsg(100, 1000);
        console.log(fifth);
    } catch(e) {
        console.log(e);
    }
}
executa();
console.log("A mensagem vem antes também?");

// Estados de uma promisa: pending - fulfilled - rejected