import assert from "assert";
import List from '../list.js'

describe("append and prepend functions", function(){
    it("should add 4 to the end of the array", function(){
        assert.deepEqual(List.append([1,2,3], 4), [1,2,3,4])
    })
    it("should add 4 for the start of an array", function(){
        assert.deepEqual(List.prepend([1,2,3], 4), [4,1,2,3])
    })
})

describe("insert function", function(){
    it("should insert 4 into index position 2", function(){
        assert.deepEqual(List.insert([1,2,3], 2, 4), [1,2,4,3])
    })
})

describe("replace and replaceAt functions", function(){
    it("should replace all 2s with 6", function(){
        assert.deepEqual(List.replace([1,2,3,4,2], 2, 6), [1,6,3,4,6])
    })
    it("should replace the item at index 3 with 6", function(){
        assert.deepEqual(List.replaceAt([1,2,3,4,2], 3, 6), [1,2,3,6,2])
    })
})

describe("remove and removeAt functions", function(){
    it("should remove every 2", function(){
        assert.deepEqual(List.remove([1,2,3,4,2], 2), [1,3,4])
    })
    it("should remove the value at index 3", function(){
        assert.deepEqual(List.removeAt([1,2,3,4,2], 3), [1,2,3,2])
    })
})

describe("combine function", function(){
    it("should combine [1,2,3] and [4,5,6] into one array multiplying the elements together", function(){
        assert.deepEqual(List.combine([1,2,3], [4,5,6], (x,y) => x*y), [4,5,6,8,10,12,12,15,18])
    })
})

describe("zip function", function(){
    it("should combine the arrays [1,2,3] and [4,5,6,7,8,9] where the indexes match", function(){
        assert.deepEqual(List.zip([1,2,3], [4,5,6,7,8,9]), [[1,4], [2,5], [3,6]])
    })
})