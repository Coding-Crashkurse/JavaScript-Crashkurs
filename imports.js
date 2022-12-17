import { foo, bar, baz } from "./module.js";
import myDefaultExport from "./default.js";

console.log(foo); // "foo"
console.log(bar); // "bar"
baz(); // "baz"

myDefaultExport(); // "I am the default export"
