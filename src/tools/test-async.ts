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