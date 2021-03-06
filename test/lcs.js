var assert = require('assert');

// if (a[i]==b[j]) T[i,j] = T[i-1,j-1]+1 else T[i,j] = max(T[i,j-1], T[i-1,j]
// http://www.geeksforgeeks.org/dynamic-programming-set-4-longest-common-subsequence/
// http://en.wikipedia.org/wiki/Longest_common_subsequence_problem

var lcs = function(a, b) {
  var curMax = b.split("").map(function(o) {
    return 0;
  });
  var newMax = [];
  var max = 0;

  for (var i=0; i<a.length; i++) {
    for (var j=0; j<b.length; j++) {
      if (a[i] == b[j]) {
        newMax[j] = (j > 0 ? curMax[j-1] : 0) + 1;
      }
      else {
        newMax[j] = Math.max(j > 0 ? newMax[j-1] : 0, curMax[j]);
      }
      if (newMax[j]>max) max = newMax[j];
    }
    curMax = newMax.slice(0);
  }
  return max;
};

describe('Longest Common Subsequence', function() {
  it('should find lcs', function() {
    assert.equal(lcs("abc", "def"), 0);
    assert.equal(lcs("abc", "bbb"), 1);
    assert.equal(lcs("abcdefg", "gbakchee"), 3);
    assert.equal(lcs("abcdefg", "gbakcheef"), 4);
    assert.equal(lcs("a", ""), 0);
    assert.equal(lcs("acb", "ab"), 2);
    assert.equal(lcs("abcdefg", "aceg"), 4);
    assert.equal(lcs("aaaa", "abcdefga"), 2);
    assert.equal(lcs("aaaa", "abcdaaaefga"), 4);
  });
});


// http://en.wikipedia.org/wiki/Longest_common_substring_problem
// longestCommonSubstringConstSpace: function(a,b) {
//   var max1 = this.lcsubHelper(a,b), max2 = this.lcsubHelper(b,a);
//   return max1[0]>max2[0] ? max1[1] : max2[1];
// },
// lcsubHelper: function(a,b) {
//   var max=0, c='';
//   for (var k=0; k<a.length; k++) {
//     var i=k,j=0,cmax=0;
//     while(i<a.length) {
//       if (a[i]==b[j]) {
//         cmax++;
//         if (cmax>max) {
//           max=cmax;
//           c=a.substr(i-max+1,max);
//         }
//       }
//       else {
//         cmax=0;
//       }
//       j++;i++;
//     }
//   }
//   return [max,c];
// },
