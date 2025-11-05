"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_async_1 = require("./tools/test-async");
async function main() {
    debugger;
    try {
        const ret = await (0, test_async_1.fctAsyncPromise)(1);
        console.log(`ret ${ret}`);
    }
    catch (ex) {
        console.log(`ex ${ex}`);
    }
}
console.log("Start app (ts)");
main();
//# sourceMappingURL=main.js.map