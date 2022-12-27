import assert from "assert";
import List from '../list.js'

describe("sort function", function(){
    it('should return an array of numbers sorted in order', function(){
        assert.deepEqual(List.sort([3,1,4,1,5,9]), [1,1,3,4,5,9])
    })
})

describe("reverse function", function(){
    it('should return an array with the elements in reverse order', function(){
        assert.deepEqual(List.reverse([1,2,3,4,5]), [5,4,3,2,1])
    })
    it('should reverse a string', function(){
        assert.equal(List.reverse("JOG"), "GOJ")
    })
})