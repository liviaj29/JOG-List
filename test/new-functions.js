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

describe("unzip function", function(){
    it('should return unzip a zipped array', function(){
        assert.deepEqual(List.unzip([[1,'a'],[2,'b']]), [[1,2],['a','b']])
    })
})

describe("allDifferent function", function(){
    it('should return return true if all elements are different', function(){
        assert.equal(List.allDifferent([1,2,3,4,5]), true)
    })
    it('should return return false if some elements are the same', function(){
        assert.equal(List.allDifferent([1,2,3,2,1]), false)
    })
})

describe("transpose function", function(){
    it('should transpose a square matrix', function(){
        assert.deepEqual(List.transpose([[1,2,3],[4,5,6],[7,8,9]]), [[1,4,7],[2,5,8],[3,6,9]])
    })
    it('should transpose a non-square matrix', function(){
        assert.deepEqual(List.transpose([[1,2],[4,5],[7,8]]), [[1,4,7],[2,5,8]])
    })
})

describe("words function", function(){
    it('should split a sententce into a list of words', function(){
        assert.deepEqual(List.words("I love JS"), ["I","love","JS"])
    })
})

describe("group function", function(){
    it('should group all the elements that are the same together into sublists', function(){
        assert.deepEqual(List.group([3,1,4,1,4,3]), [[1,1],[3,3],[4,4]])
    })
})

describe("heads and tails functions", function(){
    it('should apply the heads function successively to the list', function(){
        assert.deepEqual(List.heads([1,2,3]), [[1,2,3],[1,2],[1],[]])
    })
    it('should apply the tails function successively to the list', function(){
        assert.deepEqual(List.tails([1,2,3]), [[1,2,3],[2,3],[3],[]])
    })
})

describe("prefix and suffix functions", function(){
    it("should return true as 'par' is a prefix 'party'", function(){
        assert.equal(List.isPrefixOf("par", "party"), true)
    })
    it("should return false as hat is not a prefix of jumper", function(){
        assert.equal(List.isPrefixOf("hat", "jumper"), false)
    })
    it("should return true as ry is a suffix of party", function(){
        assert.equal(List.isSuffixOf("ty", "party"), true)
    })
    it("should return false as bad is not a suffix of good", function(){
        assert.equal(List.isSuffixOf("bad", "good"), false)
    })
})

describe("any function", function(){
    it("should return true as 5 is greater than 4", function(){
        assert.equal(List.any((x)=> x>4, [1,2,3,4,5]), true)
    })
    it("should return false as none of the values are longer than 4", function(){
        assert.equal(List.any((x)=> x.length > 4, ["I", "am", "sad"]), false)
    })
})