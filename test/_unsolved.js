// https://leetcode.com/problems/search-a-2d-matrix/description/

// https://leetcode.com/problems/set-matrix-zeroes/description/

// https://leetcode.com/problems/find-peak-element/description/

// https://leetcode.com/problems/h-index/description/


  // Given an virtual 4x4 boggle board, and some 4 letter words, determine if the words are in the board
  // It moves to left, right, up and down in a matrix, and a cell for a movement.
  // The path can start from any entry in a matrix. If a cell is occupied by a character of a string on the path, it cannot be occupied by another character again.
  // http://www.careercup.com/question?id=16142677
  // http://www.careercup.com/question?id=15542726
  // http://codercareer.blogspot.com/2012/02/no-34-string-path-in-matrix.html
  // stringPath: function(m) {

  // },

  // Given Singly Linked List with Next and Random pointer. Write a function to duplicate this.
  // http://www.geeksforgeeks.org/a-linked-list-with-next-and-arbit-pointer/
  // dupeRandPtr: function(arr) {

  // },


  // http://www.careercup.com/question?id=15489754
  // http://codercareer.blogspot.com/2013/03/no-47-search-in-rotation-of-array_31.html
  // searchRotatedArray: function(arr, n) {
  //   var s=0, e=arr.length-1;

  //   while (s<=e) {
  //     var m=s+parseInt((e-s)/2);
  //     if (arr[m]==n) {
  //       return true;
  //     }
  //     // right is sorted and n is within the range
  //     if (arr[m] <= arr[e]) {
  //       if (arr[m] >= n && arr[e] <= n) {
  //         s=m+1;
  //       }
  //       else {
  //         e = m-1;
  //       }
  //     }
  //     else {
  //       if (arr[s] >= n && arr[m] <= n) {
  //         e = m-1;
  //       }
  //       else {
  //         s=m+1;
  //       }
  //     }
  //   }
  //   return false;
  // },


  // Largest subset that forms a sequence. May contain duplicate
  // {0,3,4,6,7,9,1,2} => {0,1,2,3,4}
  // http://www.careercup.com/question?id=11070934
  // http://www.programcreek.com/2013/01/leetcode-longest-consecutive-sequence-java/
  // longestConsecutiveSeq: function(arr) {
  //   var hash = {}, l, h, max = [arr[0], arr[0]];
  //   for (var i=0; i<arr.length; i++) {
  //     l = arr[i]; h = arr[i];
  //     if (typeof hash[arr[i]-1] != 'undefined' && hash[arr[i]-1] < arr[i]) {
  //       l = hash[arr[i]-1];
  //       delete hash[arr[i]-1];
  //     }
  //     if (typeof hash[arr[i]+1] != 'undefined' && hash[arr[i]+1] > arr[i]) {
  //       h = hash[arr[i]+1];
  //       delete hash[arr[i]+1];
  //     }
  //     hash[h] = l; hash[l] = h;
  //     if (h-l > max[1] - max[0]) max = [l,h];
  //   }
  //   return max;
  // },

  // [['largestSeq','longestConsecutiveSeq'], [[0,3,4,6,7,9,1,2]], [0,4]], // 2014.11.19
  // [['largestSeq','longestConsecutiveSeq'], [[0,3,4,6,7,9,1,2,5]], [0,7]],
  // [['largestSeq','longestConsecutiveSeq'], [[0,3,4,6,7,9,1,2,5,8]], [0,9]],
  // [['largestSeq','longestConsecutiveSeq'], [[9,8,7,6,1,2,3]], [6,9]],
  // [['largestSeq','longestConsecutiveSeq'], [[1,3,9,2,8,5,-1,0]], [-1,3]],
  // [['largestSeq','longestConsecutiveSeq'], [[1,2,3,3,9,8,7,6,1,2,3,6,7,8,10]], [6,10]],
  // [['largestSeq','longestConsecutiveSeq'], [[-1,-2,1,2,3,3,9,8,7,6,1,2,3,6,7,8,10,0,4]], [-2,4]],



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



  // // http://www.geeksforgeeks.org/dynamic-programming-set-12-longest-palindromic-subsequence/
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



  // // http://stackoverflow.com/questions/1484473/how-to-find-the-lowest-common-ancestor-of-two-nodes-in-any-binary-tree
  // getCommonAncestor: function(root, a, b) {

  // },


  // // http://www.programcreek.com/2013/02/leetcode-binary-tree-maximum-path-sum-java/
  // // Given a binary tree, find the maximum path sum.
  // // The path may start and end at any node in the tree.
  // btMaxSumPath: function(root) {

  // },


  // // Find two nodes in a BST that adds up to x
  // // http://www.careercup.com/question?id=15320677
  // bst2Sum: function(root, n) {
  //   var lq = [root], rq = [root], lc = root[1], rc = root[2];
  //   while (lq.length > 0 || rq.length > 0 || lc || rc) {
  //     if (lc) {
  //       lq.push(lc);
  //       lc = lc[1];
  //     }
  //     else if (rc) {
  //       rq.push(rc);
  //       rc = rc[2];
  //     }
  //     else {
  //       if (lq.length <= 1 && rq.length <= 1) return [];
  //       if (lq.length === 0 || rq.length === 0) return [];
  //       var l = lq.pop(), r = rq.pop();
  //       if (l[0] == r[0]) return []; // to prevent adding the same node
  //       if (l[0]+r[0] === n) return [l[0],r[0]];
  //       if (l[0]+r[0] < n) {
  //         rq.push(r);
  //         lc = l[2];
  //       }
  //       else {
  //         lq.push(l);
  //         rc = r[1];
  //       }
  //     }
  //   }
  //   return [];
  // },

  // // https://www.interviewcake.com/question/rectangular-love
  // // find overlap of 2 rectangles
  // rectangleOverlap: function(r1, r2) {

  // },

  // // Sequence 01234567891011..., find nth digit.
  // // http://www.careercup.com/question?id=15382717
  // // http://codercareer.blogspot.com/2013/02/no-38-digits-in-sequence.html
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