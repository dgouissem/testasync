export function fctAsyncPromise(prm: number) : Promise<string> {
    return new Promise<string>((resolve, reject) => {
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