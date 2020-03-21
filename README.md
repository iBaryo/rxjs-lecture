# RxJS Lecture
## Topics
* Producer vs Consumer
	* Pull
		* function / generators (iterators)
	* Push
		* Promise / Observable


* Obervable
	* An Observable is a lazily evaluated computation that can synchronously or asynchronously return zero to (potentially) infinite values from the time it's invoked onwards.
	* More like function than EventEmitter
		* Sync by nature, but can be async
		* Subscribing creates a new context - The Observable does not even maintain a list of attached Observers.
	* next*(error|complete)?
	* Subscription.unsubscribe / add / remove
* Operators
	* op()(obsInst)
	* obsInst.pipe(op(),...)
	* creation: of, interval, from
	* map, tap, filter
* High-order observables
	* Observables of Observables
	* [https://blog.angular-university.io/rxjs-higher-order-mapping/](strategies:)
		* concat: do things in sequence while waiting for completion
		* merge: do things in parallel
		* switch: when in need for cancellation logic of previous observable when then next one starts.
		* exhaust: when in need for ignoring new Observables while the current one is still ongoing

* Subject
	* Overview
		* A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.
		* Since a Subject is an Observer, this also means you may provide a Subject as the argument to the subscribe of any Observable: `observable.subscribe(subject)`
	* Variants:
		* BehaviorSubject - It stores the latest value emitted to its consumers, and whenever a new Observer subscribes, it will immediately receive the "current value"
		* ReplaySubject - records multiple values from the Observable execution and replays them to new subscribers, according to number of events and/or time.
		* AsyncSubject - only the last value of the Observable execution is sent to its observers, and only when the execution completes (similar to the `last` operator).


* operator decision tree: https://rxjs-dev.firebaseapp.com/operator-decision-tree
