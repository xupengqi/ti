var assert = require('assert');

// A Bipartite Graph is a graph whose vertices can be divided into two independent sets,
// U and V such that every edge (u, v) either connects a vertex from U to V or a vertex from V to U.
// In other words, for every edge (u, v), either u belongs to U and v to V, or u belongs to V and v to U.
// We can also say that there is no edge that connects vertices of same set.

class GraphNode {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }

  setValue(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  getNeighbors() {
    return this.neighbors;
  }

  clearGraph() {
    var seen = new Set();
    var left = [this];
    while(left.length) {
      var node = left.shift();
      node.getNeighbors().forEach(function(neighbor) {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          left.push(neighbor);
        }
      });
      node.setValue(null);
    }
  }

  isBipartite() {
    this.clearGraph();
    this.setValue("left");
    var left = [this];
    while(left.length) {
      var node = left.shift();
      var newVal = node.getValue() == 'left' ? 'right' : 'left';
      for(var neighbor of node.getNeighbors()) {
        if (!neighbor.getValue()) {
          neighbor.setValue(newVal);
          left.push(neighbor);
        }
        else if (neighbor.getValue() != newVal) {
          return false;
        }
      }
    }
    return true;
  }
}

describe('Bipartite Graph', function() {
  it('should check if graph is bipartite', function() {
    var a = new GraphNode();
    var b = new GraphNode();
    var c = new GraphNode();

    a.setNeighbors([b,c]);
    b.setNeighbors([a]);
    c.setNeighbors([a]);

    assert.equal(a.isBipartite(), true);

    c.setNeighbors([a,b]);

    assert.equal(a.isBipartite(), false);
  });
});