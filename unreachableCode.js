/*eslint no-unreachable: "error"*/

function unreachableFoo() {
    return true;
    console.log("done");
}

function unreachableBar() {
    throw new Error("Oops!");
    console.log("done");
}

var value = 0;

while(value) {
    break;
    console.log("done");
}

throw new Error("Oops!");
console.log("done");

function unreachableBaz() {
    if (Math.random() < 0.5) {
        return;
    } else {
        throw new Error();
    }
    console.log("done");
}

for (;;) {}
console.log("done");