"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fctAsyncPromise = fctAsyncPromise;
function fctAsyncPromise(prm) {
    return new Promise((resolve, reject) => {
        //-----
        setTimeout(() => {
            if (prm === 0) {
                resolve('timout');
            }
            else {
                reject('une erreur');
            }
        }, 2000);
        //-----
    });
}
;
//# sourceMappingURL=test-async.js.map