import {Observable} from "rxjs";

console.log(`### Pull`);

console.log(`~~~ function - a single value`);

function func() {
    return 42;
}

console.log(func());


console.log(`~~~ generator - multiple values`);

function* generator() {
    for (let i = 1; i <= 5; ++i)
        yield i;
    return 42;
}

for (let i of generator()) {
    console.log(i);
}


console.log(`### Push`);
(async () => {
    console.log(`~~~ Promise - a single value`);
    await new Promise(r => r(42)).then(console.log);

    console.log(`~~~ Observable - multiple values`);
    new Observable(o => {
        for (let i = 1; i <= 5; ++i)
            o.next(i);
        o.complete();
    }).subscribe(console.log);
})();
