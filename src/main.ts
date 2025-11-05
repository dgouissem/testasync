
import { LaClasse } from './classes/la-classe'
import { fctAsyncPromise } from './tools/test-async';

async function main() {
    debugger;
    const ret: string = await fctAsyncPromise(0);
    console.log(`ret ${ret}`);
}

console.log("Start app (ts)")
main();