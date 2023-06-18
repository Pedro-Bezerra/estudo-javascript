//Quando havia uma sequência de funções, era feito assim antes das 'promises', com 'callback'

/*function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function sayMsg(msg, time, callback) {
    setTimeout(() => {
        console.log(msg);
        if (callback) {
            callback();
        }
    }, time);
}

sayMsg("olá!", rand(1, 3), function() {
    sayMsg("oie!", rand(1, 3), function() {
        sayMsg("tchau!", rand(1, 3))
    })
});*/

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
    });

console.log("Isso ocorrerá antes de tudo!"); //Não entendi bem, mas ocorre antes devido às ações em paralelo

//Promise.all Promise.race Promisse.resolve Promisse.reject