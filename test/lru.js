var assert = require('assert');

// Design and implement a data structure for Least Recently Used (LRU) cache.
// It should support the following operations: get and put.
// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present.
// When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
// Could you do both operations in O(1) time complexity?

class LRU {
  constructor(size) {
    this.size = size;
    this.map = new Map();
  }

  printList() {
    var hnode = this.head;
    var tnode = this.tail;
    var flist = [];
    var blist = [];
    while (hnode && flist.length <= this.size+1) {
      flist.push(hnode.key);
      hnode = hnode.next;
    }
    while (tnode && blist.length <= this.size+1) {
      blist.unshift(tnode.key);
      tnode = tnode.prev;
    }
    console.log('flist', flist.join())
    console.log('blist', blist.join())
  }

  get(key) {
    // console.log("get", key);
    if (this.map.has(key)) {
      var node = this.map.get(key);
      if (node !== this.head) {
        if (node.next) {
          node.next.prev = node.prev;
          node.prev.next = node.next;
        }
        else {
          this.tail = node.prev;
          this.tail.next = undefined;
        }
        node.next = this.head;
        node.prev = undefined;
        this.head.prev = node;
        this.head = node;
      }
      return node.value;
    }
  }

  put(key, value) {
    // console.log("put", key);
    var node = {
      key: key,
      value: value,
      prev: undefined,
      next: this.head
    };
    if (this.head) {
      this.head.prev = node
    }
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    this.map.set(key, node);

    if (this.map.size > this.size) {
      // console.log("!!!!",this.tail,"~~~~~",this.map)
      this.map.delete(this.tail.key);
      this.tail = this.tail.prev;
      this.tail.next = undefined;
    }
  }
}

describe('LRU Cache', function() {
  it('should evict key', function() {
    var lru = new LRU(3);

    assert.equal(lru.get("a"), undefined);

    lru.put("a", "1");
    lru.put("b", "2");
    lru.put("c", "3");

    assert.equal(lru.get("b"), 2);
    assert.equal(lru.get("c"), 3);
    assert.equal(lru.get("a"), 1);

    lru.put("d", 4);

    assert.equal(lru.get("d"), 4);
    assert.equal(lru.get("b"), undefined);
    assert.equal(lru.get("c"), 3);
    assert.equal(lru.get("a"), 1);

    lru.put('e', 5);
    lru.put('f', 6);

    assert.equal(lru.get("a"), 1);
    assert.equal(lru.get("b"), undefined);
    assert.equal(lru.get("c"), undefined);
    assert.equal(lru.get("d"), undefined);
    assert.equal(lru.get("e"), 5);
    assert.equal(lru.get("f"), 6);
  });
});