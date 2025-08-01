class SortedList {
  //      1) should have items and length properties #add(x)
  constructor() {
    this.items = [];
    this.length = 0;
  }
//      2) should add a single value to SortedList

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a -b);
    this.length = this.items.length;
  }
  get(pos) {
  if (pos >= this.length) {
    throw new Error("OutOfBounds");
  }
  return this.items[pos];
}

  max() {
  if (this.length === 0) {
    throw new Error("EmptySortedList");
  }
  return this.items[this.length - 1];
}
  min() {
  if (this.length === 0) {
    throw new Error("EmptySortedList");
  }
  return this.items[0];
}

  sum() {
  return this.items.reduce((acc, val) => acc + val, 0);
}

  avg() {
  if (this.length === 0) {
    throw new Error("EmptySortedList");
  }
  return this.sum() / this.length;
}
}

module.exports = SortedList;
