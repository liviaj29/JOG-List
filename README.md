# JOG List
Lists are really useful tools in JavaScript but the inbuilt functions are pretty limited, so this library has a load of extra functions to help make lists even more useful in JS.

## Create

### Range
Create a list (with a default step of one) of values between two numbers.
```javascript
List.range(1,5) === [1,2,3,4,5]

List.range(2,10,2) === [2,4,6,8,10]
```

### AlphaRange
Create a list of letter in alphabetical order.
```javascript
List.alphaRange("F", "M") === ["F","G","H","I","J","K","L","M"]

List.alphaRange("a", "z") === ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
```

### TakeRange
Take a specified length of values from an infinite list.
```javascript
List.takeRange(13,26,15) === [13,26,39,52,65,78,91,104,117,130,143,156,169,182,195]
```

### Replicate
Create a list of one value for a specified length.
```javascript
List.replicate("Hi", 10) === ["Hi","Hi","Hi","Hi","Hi","Hi","Hi","Hi","Hi","Hi"]
```

### Cycle
Take a list and replicate the items for a specified length.
```javascript
List.cycle([1,2,3],10) === [1,2,3,1,2,3,1,2,3,1]
```

## Utilities

### First
Get the first element of a list.
```javascript
List.first([1,2,3]) === 1
```

### Last
Get the last element of a list.
```javascript
List.last([1,2,3]) === 3
```

### Min
Get the smallest value of a list.
```javascript
List.min([9,3,7,2,5,4]) === 2
```
### Max
Get the largest value of a list.
```javascript
List.max([9,3,7,2,5,4]) === 9
```

### Reverse
Reverse the order of a list.
```javascript
List.reverse([1,2,3]) === [3,2,1]
```

### Sum
Get the sum of a list.
```javascript
List.sum([9,3,7,2,5,4]) === 30
```

### Product
Get the product of a list.
```javascript
List.product([9,3,7,2,5,4]) === 7560
```

## Sort

### Sort
Sort a numerical list from smallest to largest.
```javascript
List.sort([10,7,15,19,11,8,2]) === [2,7,8,10,11,15,19]
```

### Shuffle
Randomly sort a list.
```javascript
List.shuffle(["I","L","O","V","E","J","S"] === ["J","V","S","E","I","L","O"]
```
