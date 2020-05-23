import {concat, of, merge, interval, timer} from "rxjs";
import {concatMap, map, mergeMap, takeUntil, switchAll, take, switchMap, exhaustMap} from "rxjs/operators";

(async () => {
    console.log(`### high order functions`);

    function foo<T>(arg: T) {
        console.log(`single foo call with ${arg}`);
        return arg;
    }

    function foos<T>(...funcs: Array<typeof foo>): (arg: T) => Array<T> {
        return (arg) => funcs.map(func => func(arg));
    }

    console.log(`res:`, foos(foo, foo, foo)(5));





    console.log(`res: `,
        await Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
    );


    console.log(`### high order Observable`);

    console.log(`~~~ concat`);
    concat(
        of(1, 2, 3),
        of(4, 5, 6)
    ).subscribe(console.log); // waits for each to complete


    console.log(`~~~ concat map`);
    // interval(1000).pipe(
    //     concatMap(v => interval(500).pipe(
    //         take(5),
    //         map(_ => v*10)
    //     ))
    // ).subscribe(console.log);


    // console.log(`~~~ merge`);
    // merge(
    //     interval(1000).pipe(takeUntil(timer(5000)), map(v => `c1: ${v}`)),
    //     interval(1500).pipe(takeUntil(timer(5000)), map(v => `c2: ${v}`)),
    // ).subscribe(console.log); // parallel operations


    // console.log(`~~~ merge map`);
    // interval(1000).pipe(
    //     take(10),
    //     mergeMap(v => interval(300).pipe(
    //         take(10),
    //         map(_ => v*10)
    //     ))
    // ).subscribe(console.log);


    // console.log(`~~~ switch map`);
    // interval(1000).pipe(
    //     take(10),
    //     switchMap(v => interval(300).pipe(
    //         map(_ => v*10)
    //     ))
    // ).subscribe(console.log);

    console.log(`~~~ exhaust map`);
    interval(1000).pipe(
        take(10),
        exhaustMap(v => interval(300).pipe(
            take(10),           // exhaustMap ignore new events until this one is done
            map(_ => v*10)
        ))
    ).subscribe(console.log);


})();
