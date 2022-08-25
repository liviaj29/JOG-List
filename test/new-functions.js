import assert from "assert";
import List from '../list.js'

describe("average function", function(){
    it('should return 6', function(){
        assert.equal(List.average([4,19,2,3,2]), 6)
    })
})

describe("median function", function(){
    it('should return 8.5 for an array of even length', function(){
        assert.equal(List.median([9,10,6,7,2,11,8,9]), 8.5)
    })
    it('should return 8 for an array of odd length', function(){
        assert.equal(List.median([9,10,6,7,2,11,8]),8)
    })
})

describe("mode function", function(){
    it('should return 1', function(){
        assert.equal(List.mode([1,2,7,3,2,1,1,5,1,1]), 1)
    })
})

describe("intersection function", function(){
    it('should return [2,3]', function(){
        assert.deepEqual(List.intersection([1,2,3], [3,4,2]), [2,3])
    })
    it('should return an empty list if there is no intersection', function(){
        assert.deepEqual(List.intersection([1,2,3], [4,5,6]), [])
    })
})

