import assert from "assert";
import List from '../list.js'

describe('first and last functions', function(){
    it('should return 1', function(){
        assert.equal(List.first([1,2,3]), 1)
    })
    it('should return undefined for empty list', function(){
        assert.equal(List.first([]), undefined)
    })

    it('should return 3', function(){
        assert.equal(List.last([1,2,3]), 3)
    })
    it('should return undefined for empty list', function(){
        assert.equal(List.last([]), undefined)
    })
})

describe("min and max function", function(){
    it('should return 5', function(){
        assert.equal(List.min([8,6,7,8,9,5]), 5)
    })
    it('should returnn 9', function(){
        assert.equal(List.max([9,3,7,2,5,4,9]), 9)
    })
})

describe("sum function", function(){
    it("should return 30", function(){
        assert.equal(List.sum([9,3,7,2,5,4]), 30)
    })
})

describe("product function", function(){
    it('should return 7560', function(){
        assert.equal(List.product([9,3,7,2,5,4]), 7560)
    })
})