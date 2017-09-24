// var assert = require('assert');

// // http://www.geeksforgeeks.org/given-an-array-arr-find-the-maximum-j-i-such-that-arrj-arri/
// // Given an array arr[], find the maximum j - i such that arr[j] > arr[i]
// var maxJI = function(arr) {
//   var lmin = [arr[0]], rmax = [arr[arr.length-1]], result = [0,0];
//   for (var i=1; i<arr.length; i++) {
//     if (arr[i]< lmin[i-1]) {
//       lmin[i] = arr[i];
//     }
//     else {
//       lmin[i] = lmin[i-1];
//     }
//   }

//   for (i=arr.length-2; i>=0; i--) {
//     if (arr[i] > rmax[0]) {
//       rmax.unshift(arr[i]);
//     }
//     else {
//       rmax.unshift(rmax[0]);
//     }
//   }

//   var l=0,r=0;
//   while (r < arr.length) {
//     if (l > r || lmin[l] < rmax[r]) {
//       r++;
//     }
//     else {
//       l++;
//     }
//     if (l < r && lmin[l] < rmax[r]) {
//       if (r-l > result[1]-result[0]) {
//         result = [l,r];
//       }
//     }
//   }

//   return arr[result[0]]-arr[result[1]];
// };

// describe('Max Profit', function() {
//   it('should find max profit given list of prices', function() {
//     assert.equal(maxJI([34, 8, 10, 3, 2, 80, 30, 33, 1]), 2);
//   });
// });
//   ['maxJI', [],[1,7]], // 2014.11.16
//   ['maxJI', [[9, 2, 3, 4, 5, 6, 7, 8, 18, 0]],[0,8]],
//   ['maxJI', [[1, 2, 3, 4, 5, 6]],[0,5]],
//   ['maxJI', [[6, 5, 4, 3, 2, 1]],[0,0]],