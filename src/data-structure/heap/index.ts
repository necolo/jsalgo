export class Heap<T> {
  constructor(public list: T[] = []) {}

  /* -------------------------------------------------------------------------- */
  /*                              flexible methods                              */
  /* -------------------------------------------------------------------------- */

  public compare(p: T, c: T) {
    return true;
  }

  public equals(v1: T, v2: T) {
    return v1 === v2;
  }

  /* -------------------------------------------------------------------------- */
  /*                               native methods                               */
  /* -------------------------------------------------------------------------- */

  private findParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private findLeftChildIndex(index: number) {
    return index * 2 + 1;
  }

  private findRightChildIndex(index: number) {
    return index * 2 + 2;
  }

  private hasLeftChild(index: number) {
    return this.findLeftChildIndex(index) < this.list.length;
  }

  private hasRightChild(index: number) {
    return this.findRightChildIndex(index) < this.list.length;
  }

  private hasParent(index: number) {
    return this.findParentIndex(index) >= 0;
  }

  private leftChild(index: number) {
    return this.list[this.findLeftChildIndex(index)];
  }

  private rightChild(index: number) {
    return this.list[this.findRightChildIndex(index)];
  }

  private parent(index: number) {
    return this.list[this.findParentIndex(index)];
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

  public indexOf(v: T, currIdx = 0): number {
    const compareValue = this.list[currIdx];

    if (this.equals(compareValue, v)) {
      return currIdx;
    }

    if (!this.compare(compareValue, v)) {
      return -1;
    }

    // find in left children
    let targetIndex = this.indexOf(v, this.findLeftChildIndex(currIdx));
    if (targetIndex < 0) {
      // find in right children
      targetIndex = this.indexOf(v, this.findRightChildIndex(currIdx));
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
    while (this.hasLeftChild(index)) {
      let smallerChildIdx = this.findLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.compare(this.rightChild(index), this.leftChild(index))
      ) {
        smallerChildIdx = this.findRightChildIndex(index);
      }
      if (this.compare(this.list[index], this.list[smallerChildIdx])) {
        break;
      }
      this.swap(index, smallerChildIdx);
      index = smallerChildIdx;
    }
  }

  /**
   * Look up from the last element
   */
  public heapifyUp(startIdx = this.list.length - 1) {
    let index = startIdx;
    while (
      this.hasParent(index) &&
      this.compare(this.list[index], this.parent(index))
    ) {
      const parentIdx = this.findParentIndex(index);
      this.swap(index, parentIdx);
      index = parentIdx;
    }
  }

  public validate(idx: number = 0) {
    if (!this.hasLeftChild(idx)) {
      return;
    }
    if (this.compare(this.leftChild(idx), this.list[idx])) {
      throw new Error(`Invalid heap: ${this.list[idx]}`);
    }
    this.validate(this.findLeftChildIndex(idx));
    if (!this.hasRightChild(idx)) {
      return;
    }
    if (this.compare(this.rightChild(idx), this.list[idx])) {
      throw new Error(`Invalid heap: ${this.list[idx]}`);
    }
    this.validate(this.findRightChildIndex(idx));
  }

  public toString() {
    return JSON.stringify(this.list);
  }
}

export class MinHeap<T> extends Heap<T> {
  public compare(parent: T, child: T) {
    return parent < child;
  }
}

export class MaxHeap<T> extends Heap<T> {
  public compare(parent: T, child: T) {
    return parent > child;
  }
}