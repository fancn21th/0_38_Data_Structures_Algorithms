class Node {
  constructor(data) {
    this._data = data;
    this._next = null;
  }

  set next(next) {
    this._next = next;
  }

  get next() {
    return this._next;
  }

  get data() {
    return this._data;
  }
}

export default Node;
