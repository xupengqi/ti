var assert = require('assert');

// http://www.geeksforgeeks.org/largest-rectangle-under-histogram/
// http://www.informatik.uni-ulm.de/acm/Locals/2003/html/judge.html
// https://stackoverflow.com/questions/4311694/maximize-the-rectangular-area-under-histogram
// Find the largest rectangular area possible in a given histogram
// where the largest rectangle can be made of a number of contiguous bars.
// For simplicity, assume that all bars have same width and the width is 1 unit.
// For example, [6, 2, 5, 4, 5, 1, 6] = 12

// We process the elements in left-to-right order and maintain a stack of information about started but yet unfinished subhistograms. Whenever a new element arrives it is subjected to the following rules. If the stack is empty we open a new subproblem by pushing the element onto the stack. Otherwise we compare it to the element on top of the stack. If the new one is greater we again push it. If the new one is equal we skip it. In all these cases, we continue with the next new element.
// If the new one is less, we finish the topmost subproblem by updating the maximum area w.r.t. the element at the top of the stack. Then, we discard the element at the top, and repeat the procedure keeping the current new element. This way, all subproblems are finished until the stack becomes empty, or its top element is less than or equal to the new element, leading to the actions described above. If all elements have been processed, and the stack is not yet empty, we finish the remaining subproblems by updating the maximum area w.r.t. to the elements at the top.
// For the update w.r.t. an element, we find the largest rectangle that includes that element. Observe that an update of the maximum area is carried out for all elements except for those skipped. If an element is skipped, however, it has the same largest rectangle as the element on top of the stack at that time that will be updated later.
// The height of the largest rectangle is, of course, the value of the element. At the time of the update, we know how far the largest rectangle extends to the right of the element, because then, for the first time, a new element with smaller height arrived. The information, how far the largest rectangle extends to the left of the element, is available if we store it on the stack, too.
// We therefore revise the procedure described above. If a new element is pushed immediately, either because the stack is empty or it is greater than the top element of the stack, the largest rectangle containing it extends to the left no farther than the current element. If it is pushed after several elements have been popped off the stack, because it is less than these elements, the largest rectangle containing it extends to the left as far as that of the most recently popped element.
// Every element is pushed and popped at most once and in every step of the procedure at least one element is pushed or popped. Since the amount of work for the decisions and the update is constant, the complexity of the algorithm is O(n) by amortized analysis.

// For each bar, what is the max area containing that bar?
// The max area containing bar is where bar height is smallest in range
// Keep a stack of increasing bar height
// If new bar is same height as top bar, ignore
// If the new bar is lower than the top bar, that means we have reached the end of the region contains top bar
// For top bar, the area is next bar on stack (index+1) or 0 if no next bar, new bar (index-1)

var largestHistogramArea = function(histogram) {
  var stack = [];
  var max = 0;
  for (var i=0; i<histogram.length; i++) {
    if (!stack.length || histogram[i]>histogram[stack[stack.length-1]]) {
      stack.push(i);
    }
    else {
      while (histogram[i]<histogram[stack[stack.length-1]]) {
        let height = histogram[stack.pop()];
        let left = (!stack.length) ? 0 : stack[stack.length-1]+1;
        let area = (i-left)*height;
        max = Math.max(area, max);
      }
      stack.push(i);
    }
  }
  while (stack.length) {
    let height = histogram[stack.pop()];
    let left = (!stack.length) ? 0 : stack[stack.length-1]+1;
    let area = (i-left)*height;
    max = Math.max(area, max);
  }
  return max;
};

describe('Largest Rectangular Area in Histogram', function() {
  it('should find max area in a histogram', function() {
    assert.deepEqual(largestHistogramArea([6, 2, 5, 4, 5, 1, 6]), 12);
    assert.deepEqual(largestHistogramArea([3, 2, 1]), 4);
    assert.deepEqual(largestHistogramArea([1, 2, 3]), 4);
    assert.deepEqual(largestHistogramArea([1, 2, 3, 3]), 6);
    assert.deepEqual(largestHistogramArea([3, 2, 1, 1]), 4);
    assert.deepEqual(largestHistogramArea([100]), 100);
    assert.deepEqual(largestHistogramArea([100, 101, 100]), 300);
  });
});