
import { LaClasse } from './classes/la-classe'
import { fctAsyncPromise } from './tools/test-async';

async function main() {
    debugger;
    try {
        const ret: string = await fctAsyncPromise(1);
        console.log(`ret ${ret}`);
    }
    catch (ex) {
        console.log(`ex ${ex}`);
    }

}

console.log("Start app (ts)")
main();