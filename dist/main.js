"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_async_1 = require("./tools/test-async");
async function main() {
    debugger;
    const ret = await (0, test_async_1.fctAsyncPromise)(0);
    console.log(`ret ${ret}`);
}
console.log("Start app (ts)");
main();
//# sourceMappingURL=main.js.map