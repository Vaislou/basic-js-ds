const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor () {
    this.tree = null;
    this.data = 0;
  }
  root() {
    return this.tree === null ? null : this
  }

  add(item) {
    if (this.tree === null) this.tree = [];
    this.tree.push(item)
    this.data = this.tree[0];
  }

  has(item) {
    return this.tree.includes(item)
  }

  find(item) {
    if (this.tree.includes(item)) {
      this.data = item
      return this
    }
    return null
  }

  remove(item) {
    this.tree = this.tree.filter(e => e !== item)
  }

  min() {
    return Math.min.apply(Math, this.tree)
  }

  max() {
    return Math.max.apply(Math, this.tree)
  }
}