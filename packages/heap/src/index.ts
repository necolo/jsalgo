import { Comparator, CompareFunc } from '@jsalgo/utils';

export class Heap<T> {
  public list: T[] = [];
  public comparator: Comparator<T>;
  constructor(compareFunc?: CompareFunc<T>) {
    this.comparator = new Comparator(compareFunc);
  }

  /* -------------------------------------------------------------------------- */
  /*                               native methods                               */
  /* -------------------------------------------------------------------------- */

  private parent(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private left(index: number) {
    return index * 2 + 1;
  }

  private right(index: number) {
    return index * 2 + 2;
  }

  private swap(idx1: number, idx2: number) {
    const temp = this.list[idx1];
    this.list[idx1] = this.list[idx2];
    this.list[idx2] = temp;
  }

  /* -------------------------------------------------------------------------- */
  /*                                     Add                                    */
  /* -------------------------------------------------------------------------- */

  /**
   * Add element to bottom, then look up and swap if necessary
   * @param v
   */
  public add(v: T) {
    this.list.push(v);
    this.heapifyUp();
  }

  /**
   * Create heap from array
   * @param arr 
   */
  public fromArray(arr: T[]) {
    this.list.length = 0;
    for (let i = 0; i < arr.length; i++) {
      this.add(arr[i]);
    }
  }


  /* -------------------------------------------------------------------------- */
  /*                                   Delete                                   */
  /* -------------------------------------------------------------------------- */

  /**
   * Poll the root element
   * @returns
   */
  public poll() {
    const value = this.list[0];
    this.list[0] = this.list[this.list.length - 1];
    this.list.length--;
    this.heapifyDown();
    return value;
  }

  /**
   * Remove particular element
   * @param v 
   * @returns 
   */
  public remove(v: T) {
    const idx = this.indexOf(v);
    if (idx < 0) {
      return null;
    }
    const value = this.list[idx];
    this.list[idx] = this.list[this.list.length - 1];
    this.list.length--;
    this.heapifyDown(idx)
    this.heapifyUp(idx);
    return value;
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Find                                    */
  /* -------------------------------------------------------------------------- */

  public get(idx: number): T {
    return this.list[idx];
  }

  public peek() {
    return this.list[0];
  }

  public get length() {
    return this.list.length;
  }

  public find(v: T) {
    const idx = this.indexOf(v);
    if (idx >= 0) {
      return this.list[idx];
    }
    return null;
  }

  public indexOf(v: T, currIdx = 0): number {
    const compareValue = this.list[currIdx];

    if (this.comparator.equals(compareValue, v)) {
      return currIdx;
    }

    if (!this.comparator.lessThan(compareValue, v)) {
      return -1;
    }

    // find in left children
    let targetIndex = this.indexOf(v, this.left(currIdx));
    if (targetIndex < 0) {
      // find in right children
      targetIndex = this.indexOf(v, this.right(currIdx));
    }

    if (targetIndex >= 0) {
      return targetIndex;
    }

    return -1;
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Utils                                   */
  /* -------------------------------------------------------------------------- */

  /**
   * Look down from the root element
   */
  public heapifyDown(startIdx = 0) {
    let index = startIdx;
    const { comparator, list } = this;
    while (true) {
      let left = this.left(index);
      let right = this.right(index);
      let smaller = left;
      if (
        right < list.length &&
        comparator.lessThan(list[right], list[left])
      ) {
        smaller = right;
      }
      if (smaller >= list.length || comparator.lessThan(list[index], list[smaller])) {
        break;
      }
      this.swap(index, smaller);
      index = smaller;
    }
  }

  /**
   * Look up from the last element
   */
  public heapifyUp(startIdx = this.list.length - 1) {
    const { comparator, list } = this;
    let index = startIdx;
    let parent = this.parent(index);
    while (
      parent >= 0 &&
      comparator.lessThan(list[index], list[parent])
    ) {
      this.swap(index, parent);
      index = parent;
      parent = this.parent(index);
    }
  }

  public validate(idx: number = 0) {
    const { list, comparator } = this;
    const left = this.left(idx);
    if (left >= list.length) {
      return;
    }
    if (comparator.lessThan(list[left], this.list[idx])) {
      throw new Error(`Invalid heap: ${this.list[idx]}`);
    }
    this.validate(left);
    const right = this.right(idx);
    if (right >= list.length) {
      return;
    }
    if (comparator.lessThan(list[right], this.list[idx])) {
      throw new Error(`Invalid heap: ${this.list[idx]}`);
    }
    this.validate(right);
  }

  public toString() {
    return JSON.stringify(this.list);
  }
}

export class MinHeap extends Heap<number> {
  constructor() {
    super();
  }
}

export class MaxHeap extends Heap<number> {
  constructor() {
    const compareFunc: CompareFunc<number> = function (a, b) {
      if (a === b) {
        return 0;
      }
      return b - a;
    }
    super(compareFunc);
  }
}

export default Heap;