// data structures and algorithms with js

// --------
// 02 array
// --------

// linear collection of data where each elem can be access by indicies
// array in js is a specialized obj where index is a property name (categorized internally as arrays)
// --> not as efficient

// create array
// empty
var arr = []
var arr = new Array()
var arr = new Array(2) // array of length 2 with each being undefined
// with content
var arr = [1,2,3,4,5]
var arr = new Array(1, 2, 3, 4, 5)

// string to arr of words
var sentence = "the quick brown fox jumped over the lazy dog"
var words = sentence.split(" ");

// assigning arr to another arr is shallow copy
// assigning a reference
var nums = [1, 2, 3];
var nums2 = nums
nums2[0] = 100  // this makes nums[0] = 100 also

// make a deep copy to avoid this!

// accessor functions - set of predefined funcs 
// that let you accesss the elems of array

arr.indexOf(value_in_array)
arr.lastIndexOf(value_in_array)
// returns -1 if elem not found

// convert to string
var arr = ["David", "Cynthia", "Tom"]
var names = arr.join() // "David,Cynthia,Tom"
// or
names = arr.toString() // "David,Cynthia,Tom"


// concat
var a = [1, 2]
var b = [3, 4]
var c = a.concat(b) // [1, 2, 3, 4]
var d = b.concat(a) // [3, 4, 1, 2]

// splice(starting_index, num_elems)
var e = c.splice(2,1)   // [3]
var f = c               // [1, 2, 4]

// insert front
var nums = [2,3,4,5]
nums.unshift(1)     // [1,2,3,4,5]
// can to multiple
nums.unshift(0, 0)  // [0,0,1,2,3,4,5]

// remove first
nums.shift()

// middle elements
// splice(start_index, num_to_remove, things_to_add)
var nums = [1, 2, 3, 6]
// add
nums.splice(3, 0, 4, 5) // [1,2,3,4,5,6]
// remove
nums.splice(3, 1) // [1, 2, 3, 5, 6]

// reverse
var nums = [1, 2, 3]
nums.reverse()  // [3, 2, 1]

// sort
// sorts elem in natual order (lexical)
var nums = [3, 2, 1]
nums.sort()   // [1, 2, 3]
// but if you have 
var nums = [3, 2, 200, 1] 
nums.sort() // [1, 2, 200, 3]
// feed in comparator as a callback
nums.sort( function( a, b ) {
  return a - b;
});
// [1, 2, 3, 200]


// iterators

// forEach(callback)

// every(callback)
// returns true if every elem holds true to condition defined in callback

// some(callback)
// true if at least one elem holds true

// reduce(callback(accumulator, currval){})
// if used with string -> concat
var a = [1,2,3]
a.reduce(function(arr, val) {
  return arr + val;
}); // 6

var a = ['hello', 'world']
a.reduce(function(arr, val) {
  return arr + val;
}); // "helloworld"

// there is reduceRight(...) which folds from right

// iterators that return a NEW array
// map(callback)

// filter(callback)
// returns list of elems that satisty the condition defined in callback


// jagged array
// 2d array where each row with diff size
var jagged = [[1, 2], [3, 4, 5], [6]]
