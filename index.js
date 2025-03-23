// myEach: Iterates over a collection and applies a callback to each element.
function myEach(collection, callback) {
    // Convert collection to an array if it's an object
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < items.length; i++) {
        callback(items[i], i, collection);
    }
    return collection; // Return the original collection
}

// myMap: Creates a new array by applying a callback to each element in the collection.
function myMap(collection, callback) {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < items.length; i++) {
        result.push(callback(items[i], i, collection));
    }
    return result; // Return the new array
}

// myReduce: Reduces a collection to a single value using a callback.
function myReduce(collection, callback, acc) {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;

    // If no accumulator is provided, use the first element as the initial value
    if (acc === undefined) {
        acc = items[0];
        startIndex = 1; // Start from the second element
    }

    for (let i = startIndex; i < items.length; i++) {
        acc = callback(acc, items[i], collection);
    }
    return acc; // Return the accumulated value
}

// myFind: Returns the first value that passes a truth test (predicate).
function myFind(collection, predicate) {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < items.length; i++) {
        if (predicate(items[i], i, collection)) {
            return items[i]; // Return the first matching element
        }
    }
    return undefined; // Return undefined if no match is found
}

// myFilter: Returns an array of all values that pass a truth test (predicate).
function myFilter(collection, predicate) {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < items.length; i++) {
        if (predicate(items[i], i, collection)) {
            result.push(items[i]); // Add matching elements to the result
        }
    }
    return result; // Return the array of matching elements
}

// mySize: Returns the number of values in the collection.
function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// myFirst: Returns the first element or the first n elements of an array.
function myFirst(array, n) {
    if (n === undefined) {
        return array[0]; // Return the first element
    }
    return array.slice(0, n); // Return the first n elements
}

// myLast: Returns the last element or the last n elements of an array.
function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1]; // Return the last element
    }
    return array.slice(-n); // Return the last n elements
}

// myKeys: Returns an array of the object's keys.
function myKeys(object) {
    return Object.keys(object); // Use built-in method to get keys
}

// myValues: Returns an array of the object's values.
function myValues(object) {
    return Object.values(object); // Use built-in method to get values
}

// BONUS: mySortBy: Returns a sorted copy of the array based on the callback.
function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
        const aValue = callback(a);
        const bValue = callback(b);
        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
    });
}

// BONUS: myFlatten: Flattens a nested array.
function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            if (shallow) {
                newArr.push(...array[i]); // Flatten one level
            } else {
                myFlatten(array[i], shallow, newArr); // Recurse for deeper flattening
            }
        } else {
            newArr.push(array[i])}}}; // Push non-array elements