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
    const { list } = this;
    const v = list[0];
    list[0] = list[this.length - 1];
    list.length--;
    this.heapifyDown();
    return v;
  }

  heapifyDown() {
    const { list } = this;
    let i = 0;
    while(true) {
      const l = i * 2 + 1;
      if (l >= this.length) break;
      const r = i * 2 + 2;
      let target = l;
      if (r < this.length && this.comparator(list[l], list[r]) > 0) {
        target = r;
      }
      if (this.comparator(list[i], list[target]) <= 0) break;
      this.swap(i, target);
      i = target;
    }
  }

  heapifyUp() {
    let i = this.length - 1;
    const { list } = this;
    while(true) {
      let p = parent(i);
      if (p < 0) break;
      if (this.comparator(list[p], list[i]) <= 0) break;
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