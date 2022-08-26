import assert from "assert";
import List from '../list.js'

describe("isEmpty function", function(){
    it('should return true if the array is empty', function(){
        assert.equal(List.isEmpty([]), true)
    })
    it('should return false if the array is not empty', function(){
        assert.equal(List.isEmpty([false]), false)
    })
})

describe("isEqual function", function(){
    it('should return true if the arrays are the same', function(){
        assert.equal(List.isEqual([1,2,3],[1,2,3]), true)
    })
    it('should return false if the arrays are different', function(){
        assert.equal(List.isEmpty([1,2,3],[1,2,3,4]), false)
    })
})

describe("init and tail functions", function(){
    it('should return the array without the last element', function(){
        assert.deepEqual(List.init([1,2,3]), [1,2])
    })
    it('should return the array without the first element', function(){
        assert.deepEqual(List.tail([1,2,3]), [2,3])
    })
})

describe("take and drop functions", function(){
    it('should return the array with the first specified number of elements', function(){
        assert.deepEqual(List.take([1,2,3,4,5,6],4), [1,2,3,4])
    })
    it('should return the array without the first specified number of elements', function(){
        assert.deepEqual(List.drop([1,2,3,4,5,6],4), [5,6])
    })
})

describe("unique function", function(){
    it('should return the array with any duplicate elements removed', function(){
        assert.deepEqual(List.unique([1,2,3,5,2,1,6,2,3]), [1,2,3,5,6])
    })
    it('should return the same array if there are no duplicates', function(){
        assert.deepEqual(List.unique([1,2,3]), [1,2,3])
    })
})