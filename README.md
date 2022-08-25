# JOG List
This mini JavaScript library is based off of Haskell's List functions. JavaScript doesn't have a List type and so this library will really assist in making functional programming in JavaScript a lot easier. 

A fundamental aspect of using lists/arrays in functional programming is that the original list/array should never be changed. No mutation occurs when an array is passed through one of these functions, simply a new array is created, still giving you access to the original array.

For example,
```javascript
const arr = [1,2,3]

List.reverse(arr)
```
`arr` will still have a value of `[1,2,3]` even though it has been passed through a function.

Whereas using the inbuilt `reverse` JavaScript function:

```javascript
const arr = [1,2,3]

arr.reverse()
```
The value of `arr` will now be `[3,2,1]`.

## Range Functions

### `range`
Creates an array (with a default step of one) of values between two numbers.
```javascript
List.range(1,5) === [1,2,3,4,5]

List.range(2,10,2) === [2,4,6,8,10]
```

### `alphaRange`
Creates an array of letter in alphabetical order.
```javascript
List.alphaRange("F", "M") === ["F","G","H","I","J","K","L","M"]

List.alphaRange("a", "z") === ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
```

### `takeRange`
Take a specified length of values from an infinite list.
```javascript
List.takeRange(13,26,15) === [13,26,39,52,65,78,91,104,117,130,143,156,169,182,195]
```

### `replicate`
Creates an array of one value for a specified length.
```javascript
List.replicate("Hi", 10) === ["Hi","Hi","Hi","Hi","Hi","Hi","Hi","Hi","Hi","Hi"]
```

### `cycle`
Takes an array and replicates the items for a specified length.
```javascript
List.cycle([1,2,3],10) === [1,2,3,1,2,3,1,2,3,1]
```

## Single Values of a List

### `first`
Returns the first element of an array.
```javascript
List.first([1,2,3]) === 1
```

### `last`
Returns the last element of an array.
```javascript
List.last([1,2,3]) === 3
```

### `min`
Returns the smallest value of an array.
```javascript
List.min([9,3,7,2,5,4]) === 2
```
### `max`
Returns the largest value of an array.
```javascript
List.max([9,3,7,2,5,4]) === 9
```

### `sum`
Returns the sum of all the elements in an array.
```javascript
List.sum([9,3,7,2,5,4]) === 30
```

### `product`
Returns the product of all the elements in an array.
```javascript
List.product([9,3,7,2,5,4]) === 7560
```

## Sorting Lists

### `sort`
Sorts an array containing numerical elements from smallest to largest.
```javascript
List.sort([10,7,15,19,11,8,2]) === [2,7,8,10,11,15,19]
```

### `shuffle`
Randomly sorts the elements of an array.
```javascript
List.shuffle(["I","L","O","V","E","J","S"] === ["J","V","S","E","I","L","O"]
```

### `reverse`
Reverses the order of elements in an array.
```javascript
List.reverse([1,2,3]) === [3,2,1]
```

## Deconstruct a List

### `isEmpty`
Returns a Boolean value on whether or not the array is empty.
```javascript
List.isEmpty([]) === true

List.isEmpty([1,2,3]) === false
```

### `isEqual`
Returns a Boolean value on whether or not two arrays are the same.
```javascript
List.isEqual([1,2,3], [4,5,6]) === false

List.isEqual([1,2,3], [1,2,3]) === true
```

### `init`
Returns the array without the last element.
```javascript
List.init([1,2,3,4,5,6]) === [1,2,3,4,5]
```

### `tail`
Returns the array without the first element.
```javascript
List.tail([1,2,3,4,5,6]) === [2,3,4,5,6]
```

### `take`
Returns the array with the first specified number of elements.
```javascript
List.take([1,2,3,4,5,6], 4) === [1,2,3,4]
```

### `drop`
Returns the array without the first specified number of elements.
```javascript
List.drop([1,2,3,4,5,6], 4) === [5,6]
```

### `unique`
Returns the array with only the unique elements.
```javascript
List.unique([1,2,3,5,2,1,6,2,3]) === [1,2,3,5,6]
```
## Transform a List

### `append`
Adds an element to the end of an array.
```javascript
List.append([1,2,3], 4) === [1,2,3,4]
```

### `prepend`
Adds an element to the start of an array.
```javascript
List.prepend([1,2,3], 4) === [4,1,2,3]
```

### `insert`
Inserts an element into an array at a specified index.
```javascript
List.insert([1,2,3], 2, 4) === [1,2,4,3]
```

### `replace`
Replaces all instances of an element with a different element.
```javascript
List.replace([1,2,3,4,2], 2, 6) === [1,6,3,4,6]
```

### `replaceAt`
Replaces an element at a specified index.
```javascript
List.replaceAt([1,2,3,4,2], 3, 6) === [1,2,3,6,2]
```

### `remove`
Removes all instances of an element.
```javascript
List.remove([1,2,3,4,2], 2) === [1,3,4]
```

### `removeAt`
Removes an element at a specified index.
```javascript
List.removeAt([1,2,3,4,2], 3) === [1,2,3,2]
```

### `combine`
Combines two arrays into one with any given function.
```javascript
List.combine([1,2,3], [4,5,6], mult = (x,y) => x*y) === [4,5,6,8,10,12,12,15,18]
```

### `zip`
Takes two one-dimensional arrays and combines them into a single two-dimensional array, but only where indexes match.
```javascript
List.zip([1,2,3], [4,5,6,7,8,9]) === [[1,4], [2,5], [3,6]]
```
