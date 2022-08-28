class Heap {
  constructor(comparator) {
    this.comparator = comparator;
    this.list = [];
  }

  get length() {
    return this.list.length;
  }

  add(...values) {
    for (let i = 0; i < values.length; i++) {
      this.list.push(values[i]);
      this.heapifyUp();
    }
  }

  peek() {
    return this.list[0];
  }

  poll() {
    const v = this.list[0];
    this.list[0] = this.list[this.length - 1];
    this.list.length--;
    this.heapifyDown();
    return v;
  }

  heapifyDown() {
    let i = 0;
    while(true) {
      let l = left(i);
      if (l >= this.length) break;
      let r = right(i);
      let target = l;
      if (r < this.length && this.comparator(l, r) > 0) {
        target = r;
      }
      if (this.comparator(i, target) <= 0) break;
      this.swap(i, target);
      i = target;
    }
  }

  heapifyUp() {
    let i = this.length - 1;
    while(true) {
      let p = parent(i);
      if (p < 0) break;
      if (this.comparator(this.list[p], this.list[i]) <= 0) break;
      this.swap(p, i);
      i = p;
    }
  }

  swap(i, j) {
    const temp = this.list[i];
    this.list[i] = this.list[j];
    this.list[j] = temp;
  }
}

function parent(idx) {
  return Math.floor((idx - 1) / 2);
}

function left(idx) {
  return idx * 2 + 1;
}

function right(idx) {
  return idx * 2 + 2;
}