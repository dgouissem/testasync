console.log('start app');

function fctAsyncPromise(prm) {
    return new Promise((resolve, reject) => {
        //-----
        setTimeout(() => {
            if (prm === 0) {
                resolve('timout');
            } else {
                reject('une erreur');
            }
        }, 2000);
        //-----
    });
};

// fctAsyncPromise().then((data) => {
//     //si appel de resolve
//     console.log("OK " + data);
//     // fctAsyncPromise().then((data2 => {
//     // console.log("OK 2" + data);
//     // }));
// }).catch(() => {
//     //si appel de reject
//     console.log("KO");
// });

// fctAsyncPromise().then((data2 => {
//     console.log("OK 2" + data2);
// }));
try {
    const ret1 = await fctAsyncPromise(0);
    console.log("wait 1 " + ret1);
} catch (ex) {
    console.error(ex);
}

try {
    const ret2 = await fctAsyncPromise(1);
    console.log("wait 2 " + ret2);
} catch (ex1) {
    console.error(ex1);
}



console.log('stop app');