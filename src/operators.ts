import {from, interval, Observable, of} from "rxjs";
import {filter, map, tap} from "rxjs/operators";

function* generator() {
    yield 7;
    yield 8;
    yield 9;
}

type ObservableOp = <T>(obs: Observable<T>) => Observable<T>;

console.log(`### creational operators`);
of(1,2,3).subscribe(console.log);
from([4,5,6]).subscribe(console.log);
from(generator()).subscribe(console.log);
// from(Promise.resolve(10)).subscribe(console.log);
// interval(1000).subscribe(console.log);



type OperatorCreator = (...args) => ObservableOp;

console.log(`### other operators`);
const power2 = map((v: number) => v*v);
power2(of(1,2,3)).subscribe(console.log);


console.log(`### piping operators`);
from(new Array(20).fill(0).map((_, i) => i))
    .pipe(
        filter(v => v % 2 == 0),
        tap(v => console.log(`iterating ${v}...`)),
        map(v => v*3),
    )
    .subscribe(console.log);
