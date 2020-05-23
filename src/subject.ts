import {AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";

console.log(`### shared context`);
const chat = new Subject<string>();
(chat as Observable<string>).subscribe(v => console.log(`first sub: ${v}`)); // Subject extends Observable
chat.subscribe(v => console.log(`second sub: ${v}`));
chat.next('~msg~');
chat.subscribe(v => console.log(`third sub: ${v}`));


console.log(`### observable/observer chaining`);
new Observable<string>(o => {
    o.next('@ext-msg@');
    o.complete();
}).subscribe(chat);


console.log(`### Subjects variants`);
console.log(`~~~ Behavior subject`);
const currentResult = new BehaviorSubject<[number, number]>([0,0]);
currentResult.subscribe(v => console.log(`listener1: ${v}`));
currentResult.next([1,0]);
currentResult.subscribe(v => console.log(`listener2: ${v}`));
currentResult.next([1,1]);
currentResult.subscribe(v => console.log(`listener3: ${v}`));


console.log(`~~~ Replay subject`);
const moveHistroy = new ReplaySubject<[number, number]>();
moveHistroy.subscribe(v => console.log(`listener1: ${v}`));
moveHistroy.next([1,0]);
moveHistroy.next([1,1]);
moveHistroy.next([1,2]);
moveHistroy.subscribe(v => console.log(`listener2: ${v}`));
moveHistroy.next([2,2]);
moveHistroy.subscribe(v => console.log(`listener3: ${v}`));


console.log(`~~~ async subject`);
const finalResult = new AsyncSubject<[number, number]>();
finalResult.subscribe(v => console.log(`listener1: ${v}`));
finalResult.next([1,0]);
finalResult.subscribe(v => console.log(`listener2: ${v}`));
finalResult.next([1,1]);
finalResult.subscribe(v => console.log(`listener3: ${v}`));
finalResult.next([1,2]);
finalResult.next([2,2]);
finalResult.complete();
