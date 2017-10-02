// https://leetcode.com/problems/create-maximum-number/description/

// https://leetcode.com/problems/the-skyline-problem/description/

// https://leetcode.com/problems/search-a-2d-matrix-ii/description/

// https://leetcode.com/articles/maximum-average-subarray-ii/

// http://www.lintcode.com/en/problem/graph-valid-tree/

// http://stackoverflow.com/questions/1484473/how-to-find-the-lowest-common-ancestor-of-two-nodes-in-any-binary-tree

// http://www.programcreek.com/2013/02/leetcode-binary-tree-maximum-path-sum-java/
// Given a binary tree, find the maximum path sum.
// The path may start and end at any node in the tree.

// Median of 2 sorted arrays
// http://www.programcreek.com/2012/12/leetcode-median-of-two-sorted-arrays-java/

// Search 2D matrix, increasingly sorted
// http://www.programcreek.com/2013/01/leetcode-search-a-2d-matrix-java/
// https://leetcode.com/problems/search-a-2d-matrix/description/

// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
// http://www.programcreek.com/2012/12/leetcode-set-matrix-zeroes-java/
// https://leetcode.com/problems/set-matrix-zeroes/description/

// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
// http://www.programcreek.com/2013/02/leetcode-partition-list-java/

// // https://www.interviewcake.com/question/rectangular-love
// // find overlap of 2 rectangles

// https://leetcode.com/problems/find-peak-element/description/

// https://leetcode.com/problems/h-index/description/

// Given an virtual 4x4 boggle board, and some 4 letter words, determine if the words are in the board
// It moves to left, right, up and down in a matrix, and a cell for a movement.
// The path can start from any entry in a matrix. If a cell is occupied by a character of a string on the path, it cannot be occupied by another character again.
// http://www.careercup.com/question?id=16142677
// http://www.careercup.com/question?id=15542726
// http://codercareer.blogspot.com/2012/02/no-34-string-path-in-matrix.html

// Given Singly Linked List with Next and Random pointer. Write a function to duplicate this.
// http://www.geeksforgeeks.org/a-linked-list-with-next-and-arbit-pointer/

// allPalindromePartitions: function(str) {
//   var p=[],ip=[];
//   for (var i=0; i<str.length; i++) {
//     if (!ip[i]) ip[i]=[];
//     for (var j=i; j>=0; j--) {
//       if (str[i]==str[j]) {
//         if (i===j || i-j===1) ip[i][j] = true;
//         else ip[i][j] = ip[i-1][j+1];
//       }
//       else ip[i][j] = false;
//       if (ip[i][j]) {
//         if (!p[i]) p[i] = [];
//         if (j===0) p[i].push([str.substr(j,i-j+1)]);
//         else {
//           var np = str.substr(j,i-j+1);
//           for (var k=0; k<p[j-1].length; k++) {
//             p[i].push(p[j-1][k].concat(np));
//           }
//         }
//       }
//     }
//   }
//   return p[str.length-1];
// },
// ['allPalindromePartitions', ['aab'], [['a','a','b'],['aa','b']]],
// ['allPalindromePartitions', ['abab'], [['a','b','a','b'],['aba','b'],['a','bab']]],
// ['allPalindromePartitions', ['abba'], [['a','b','b','a'],['a','bb', 'a'],['abba']]],
// ['allPalindromePartitions', ['aaaa'], [['a','a','a','a'],['aa','a', 'a'],['a','aa', 'a'],['aaa', 'a'],['a','a', 'aa'],['aa','aa'],['a','aaa'],['aaaa']]],

// http://codercareer.blogspot.com/2013/02/no-43-minimal-number-of-splits-on-string.html
// Minimal Number of Palindromes on a String
// Notice that the substring str[i,j] is a palindrome only if the characters at index i and j, and str[i+1,j-1] is also a palindrome.
// We could build a 2D table accordingly to store whether every substring of str is a palindrome or not during the preprocessing.
// With such a table, the function isPalindrome can verify the substring str[i,j] in O(1) time.
// the time complexity of the solution would be O(n2).
// minPalindromes: function(str) {
//   var minP = [];
//   for (var i=0; i<str.length; i++) {
//     minP[i] = i;
//   }
//   for (i=1; i<str.length; i++) {
//     for (var j=0; j<=i; j++) {
//       if (this.isPalindrome(str, j, i)) {
//         var split = j-1 >=0 ? minP[j-1] + 1 : 0;
//         minP[i] = minP[i] > split ? split : minP[i];
//       }
//     }
//   }
//   return minP[str.length-1];
// },
// isPalindrome: function(str, i, j) {
//   while (i<j) {
//     if (str[i] != str[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// },
// minPalindromes2: function(str) {
//   var min = [], ip = [];
//   for (var i=0; i<str.length; i++)
//     min[i] = i;
//   for (i=1; i<str.length; i++) {
//     if (!ip[i]) ip[i]=[];
//     for (var j=i; j>=0; j--) {
//       if (str[i]==str[j]) {
//         if (i===j || i-j===1) ip[i][j] = true;
//         else ip[i][j] = ip[i-1][j+1];
//       }
//       else ip[i][j] = false;
//       if (ip[i][j]) {
//         if (j===0) min[i] = 0;
//         else min[i] = min[j-1]+1 < min[i] ? min[j-1]+1 : min[i];
//       }
//     }
//   }
//   return min[str.length-1];
// },
// minPalindromes3: function(str) {
//   var r = [];
//   for (var i=0; i<str.length; i++) {
//     this.minpExp(str,i,i,r);
//     if (i<str.length-1 && str[i] == str[i+1]) {
//       this.minpExp(str,i,i+1,r);
//     }
//   }
//   return r[str.length-1];
// },
// minpExp: function(str, s, e, r) {
//   while (str[s] == str[e] && s >= 0 && e <= str.length-1) {
//     if (s===0) r[e] = 0;
//     else if (r[e] === undefined) r[e] = r[s-1]+1;
//     else r[e] = Math.min(r[e], r[s-1]+1);
//     s--; e++;
//   }
// },
// [['minPalindromes','minPalindromes2', 'minPalindromes3'], ['abc'], 2], // 2015.01.20
// [['minPalindromes','minPalindromes2', 'minPalindromes3'], ['abcba'], 0],
// [['minPalindromes','minPalindromes2', 'minPalindromes3'], ['aba2cbc'], 2],

// http://www.geeksforgeeks.org/dynamic-programming-set-12-longest-palindromic-subsequence/
// longestPalindSubsequence: function(str) {
//   var result = [], max = 1;
//   for (var i=0; i<str.length; i++) {
//     if(!result[i]) result[i] = [];
//     result[i][i] = 1;
//   }
//   for (var sj = 1; sj<str.length; sj++) {
//     for (var j=sj; j<str.length; j++) {
//       i=j-sj;
//       if (str[i]==str[j]) {
//         if (i==j-1) {
//           result[i][j] = 2;
//         }
//         else {
//           result[i][j] = result[i+1][j-1]+2;
//         }
//       }
//       else {
//         if (i==j-1) {
//           result[i][j] = 1;
//         }
//         else {
//           result[i][j] = Math.max(result[i+1][j], result[i][j-1]);
//         }
//       }
//       max = result[i][j] > max ? result[i][j] : max;
//     }
//   }
//   //console.log(result);
//   return max;
// },
// longestPalindSubsequence2: function(str) {
//   var result = [];
//   for (var i=0; i<str.length; i++) {
//     result[i] = []; result[i][i] = 1;
//   }
//   for (i=str.length-2; i>=0; i--) {
//     for (var j=i+1; j<str.length; j++) {
//       if (str[i]==str[j]) {
//         if (i==j-1) result[i][j] = 2;
//         else result[i][j] = result[i+1][j-1]+2;
//       }
//       else {
//         result[i][j] = Math.max(result[i+1][j], result[i][j-1]);
//       }
//     }
//   }
//   return result[0][str.length-1];
// },
// [['longestPalindSubsequence','longestPalindSubsequence2'], ['abc'], 1], // 2014.11.16
// [['longestPalindSubsequence','longestPalindSubsequence2'], ['abbc'], 2],
// [['longestPalindSubsequence','longestPalindSubsequence2'], ['abcbc'], 3],
// [['longestPalindSubsequence','longestPalindSubsequence2'], ['abddcb'], 4],
// [['longestPalindSubsequence','longestPalindSubsequence2'], ['GEEKS FOR GEEKS'], 7],

// Sequence 01234567891011..., find nth digit.
// http://www.careercup.com/question?id=15382717
// http://codercareer.blogspot.com/2013/02/no-38-digits-in-sequence.html
// nthDigit: function(n) {
//   var d=1, p=10, ld=0, b=0;
//   while (n-(p*d-ld) > 0) {
//     n = n-(p*d-ld);
//     d++;
//     ld = d*p;
//     b=p;
//     p*=10;
//   }
//   var num=b+Math.floor(n/d);
//   //console.log(n+","+n%d);
//   return (num+"")[n%d];
// },