import assert from "assert";
import List from '../list.js'

describe("map function", function(){
    it('should square all the numbers', function(){
        assert.deepEqual(List.map(x => x*x, [1,2,3]), [1,4,9])
    })
    it('should map strings', function(){
        assert.equal(List.map(x => x + "!","Hello"), "H!e!l!l!o!")
    })
})

describe("filter function", function(){
    it('should filter out all the even numbers', function(){
        assert.deepEqual(List.filter(x => x%2, [4,19,2,3,2]), [19,3])
    })
    it('should filter strings', function(){
        assert.equal(List.filter(x => x.toUpperCase() === x, "Hello"), "H")
    })
})

describe("fold functions", function(){
    it('should fold right', function(){
        assert.equal(List.foldr((S,x) => S + x,0,[4,19,2,3,2]), 30)
    })
    it('should fold left', function(){
        assert.equal(List.foldl((S,x) => S + x,0,[4,19,2,3,2]), 30)
    })
})

describe("find function", function(){
    it('should find the first odd number', function(){
        assert.equal(List.find(x => x%2, [4,19,2,3,2]), 19)
    })
    it('should find characters in strings', function(){
        assert.equal(List.find(x => x === "e", "Hello"), "e")
    })
})

describe("some function", function(){
    it('should return true', function(){
        assert.equal(List.some(x => x%2, [4,19,2,3,2]), true)
    })
    it('should check characters in strings', function(){
        assert.equal(List.some(x => x === "e", "Hello"), true)
    })
})

describe("every function", function(){
    it('should return false', function(){
        assert.equal(List.every(x => x%2, [4,19,2,3,2]), false)
    })
    it('should check every character in a string', function(){
        assert.equal(List.every(x => x.toUpperCase() === x, "HELLO"), true)
    })
})