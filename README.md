# Daily JS Problems

Every day I learn about small problems and solve them using JavaScript. This repository groups those problem solutions by topic and provides a one‑line description for each file.

## Categories

### Array Algorithms

- [array-to-object.js](array-to-object.js): Convert an array of objects into an object keyed by `id`; also shows indexing by position and iterating object properties.
- [find-missing-value.js](find-missing-value.js): Find the missing integer in a range using expected arithmetic series sum vs actual array sum.
- [group-by-property.js](group-by-property.js): Group array items by a property (e.g., `city`) using `reduce()` into an object of arrays.
- [is-array-sorted.js](is-array-sorted.js): Check if an array is sorted in ascending order via a single pass comparison.
- [move-all-zeroes-to-end.js](move-all-zeroes-to-end.js): Move all zeroes to the end of the array by splicing zeroes and then pushing them back.
- [remove-element.js](remove-element.js): Remove a specific element using `indexOf` and `splice`; demonstrates `slice` vs `splice` and extracting subarrays.
- [union-of-two-arrays.js](union-of-two-arrays.js): Create the union of two arrays using `Set` and spread syntax.

### Type Checking & Utilities

- [check-types.js](check-types.js): Verify all array elements share the same type using `every()` with `typeof`.

### JavaScript Concepts

- [temporal-dead-zone.js](temporal-dead-zone.js): Demonstrate the Temporal Dead Zone (TDZ) with `let` where pre‑declaration access throws a `ReferenceError`.
- [promise.js](promise.js): Create a promise that resolves or rejects after a delay, demonstrating `.then()`, `.catch()`, and `.finally()` chaining.
- [event-loop.js](event-loop.js): Explain the event loop, call stack, and task queue with examples of macro tasks (setTimeout) and micro tasks (Promises).
