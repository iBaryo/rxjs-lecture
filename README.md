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
	* Subscription.unsubscribe
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



