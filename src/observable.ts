import {Observable, Subscriber} from "rxjs";

console.log(`### sync or async?`);

console.log(`before`);

new Observable(o => {
    console.log(`starting`);
    for (let i = 1; i <= 5; ++i)
        o.next(i);
    o.complete();
    console.log(`done`);
}).subscribe(console.log);

console.log(`after`);


console.log(`### lazy?`);
const lazyObs = new Observable(o => {
    console.log(`starting`);
    for (let i = 1; i <= 5; ++i)
        o.next(i);
    o.complete();
    console.log(`done`);
});
console.log(`subscribing`);
lazyObs.subscribe();


console.log(`### contextual?`);
const ctxObs = new Observable(o => {
    console.log(`starting`);
    for (let i = 1; i <= 5; ++i)
        setTimeout(() => o.next(i), i);
    console.log(`done`);
});

console.log(`~~ context1 subscribe`);
ctxObs.subscribe(v => console.log(`context1: ${v}`));
console.log(`~~ context2 subscribe`);
ctxObs.subscribe(v => console.log(`context2: ${v}`));


console.log(`### states?`);
new Observable(o => {
    console.log(`starting`);
    for (let i = 1; i <= 5; ++i)
        o.next(i);
    o.complete();
    o.error(`err!`);
    console.log(`done`);
    o.next(42);
}).subscribe(console.log, e => console.error(`uh oh: ${e}`), () => console.log(`completed!`));




console.log(`### subscription?`);
let subscriber: Subscriber<number>;
const obs = new Observable(o => {
    subscriber = o;
    return () => console.log(`teardown`);
});

console.log(`subscriber: ${subscriber}`);
console.log(`subscribing`);
const subscription = obs.subscribe(console.log, e => console.error(`uh oh: ${e}`), () => console.log(`completed!`));
console.log(`subscriber: ${subscriber}`);

console.log(`adding teardown`);
subscription.add(() => console.log(`added teardown`));

console.log(`closed: ${subscription.closed}`);

console.log(`unsubscribe`);
subscription.unsubscribe();

console.log(`closed: ${subscription.closed}`);
