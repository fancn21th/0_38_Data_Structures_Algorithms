class BinaryTreeNode {
  constructor(data) {
    this._data = data;
    this._left = null;
    this._right = null;
  }

  get data() {
    return this._data;
  }

  get left() {
    return this._left;
  }

  set left(btNode) {
    this._left = btNode;
  }

  get right() {
    return this._right;
  }

  set right(btNode) {
    this._right = btNode;
  }
}
