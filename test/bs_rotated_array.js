var assert = require('assert');

// http://www.careercup.com/question?id=15489754
// http://codercareer.blogspot.com/2013/03/no-47-search-in-rotation-of-array_31.html

var bsRotatedArray = function(arr, k) {
  var l = 0, r = arr.length-1;
  while (l<=r) {
    let m = Math.ceil(l+(r-l)/2);
    if (arr[m] == k) return true;
    if (arr[l] < arr[m]) {
      if (arr[l] <= k && k <= arr[m]) {
        r = m-1;
      }
      else {
        l = m+1;
      }
    }
    else if (arr[m] <= k && k <= arr[r]) {
      l = m+1;
    }
    else {
      r = m-1;
    }
  }
  return false;
};

describe('Search Rorated Array', function() {
  it('should find K in rotated array', function() {
    assert.equal(bsRotatedArray([4,5,6,1,2,3],4), true);
    assert.equal(bsRotatedArray([4,5,6,1,2,3],6), true);
    assert.equal(bsRotatedArray([4,5,6,1,2,3],1), true);
    assert.equal(bsRotatedArray([4,5,6,1,2,3],3), true);
    assert.equal(bsRotatedArray([4,5,6,1,2,3],0), false);
    assert.equal(bsRotatedArray([4,5,6,1,2,3],7), false);
  });
});