import assert from "assert";
import List from '../list.js'

describe("range function", function(){
    it('should return an array of numbers between 1 and 5 with a step of 1', function(){
        assert.deepEqual(List.range(1,5), [1,2,3,4,5])
    })
    it('should return an array of numbers between 2 and 10 with a step of 2', function(){
        assert.deepEqual(List.range(2,10,2), [2,4,6,8,10])
    })
    it('should return an array of numbers between 6 and 24 with a step of 3', function(){
        assert.deepEqual(List.range(6,24,3), [6,9,12,15,18,21,24])
    })
})

describe("alphaRange function", function(){
    it('should return an array of the letters from F to M in alphabetical order', function(){
        assert.deepEqual(List.alphaRange("F", "M"), ["F","G","H","I","J","K","L","M"])
    })
    it('should return an array of the letters a to z in alphabetical order', function(){
        assert.deepEqual(List.alphaRange("a", "z"), ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])
    })
})

describe("takeRange function", function(){
    it('should return an array of numbers of length 15 starting from 13 with a step of 13', function(){
        assert.deepEqual(List.takeRange(13,26,15), [13,26,39,52,65,78,91,104,117,130,143,156,169,182,195])
    })
    it('should return an array of numbers of length 8 starting from 9 with a step of 6', function(){
        assert.deepEqual(List.takeRange(9,15,8), [9,15,21,27,33,39,45,51])
    })
})

describe("replicate function", function(){
    it('should return an array of length 10 with each having a value of Hi', function(){
        assert.deepEqual(List.replicate("Hi", 10),["Hi","Hi","Hi","Hi","Hi","Hi","Hi","Hi","Hi","Hi"])
    })
    it('should return an array of length 6 with each space having a value of 8', function(){
        assert.deepEqual(List.replicate(8,6), [8,8,8,8,8,8])
    })
})

describe("cycle function", function(){
    it('should return an array of length 10 that replicates the items in [1,2,3]', function(){
        assert.deepEqual(List.cycle([1,2,3], 10), [1,2,3,1,2,3,1,2,3,1])
    })
    it('should return an array of length 15 that replicate the items in [4,2,7,6]', function(){
        assert.deepEqual(List.cycle([4,2,7,6], 15), [4,2,7,6,4,2,7,6,4,2,7,6,4,2,7])
    })
})