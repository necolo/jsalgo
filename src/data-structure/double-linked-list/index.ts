export class DoubleLinkedListNode<T> {
  public prev: DoubleLinkedListNode<T> | null = null;
  public next: DoubleLinkedListNode<T> | null = null;

  constructor(
    public value:T,
  ) {}

  public bindPrev(node: DoubleLinkedListNode<T> | null) {
    this.prev = node;
    if (node) {
      node.next = this;
    }
  }

  public bindNext(node: DoubleLinkedListNode<T> | null) {
    this.next = node;
    if (node) {
      node.prev = this;
    }
  }
}

type ValueFunc<T, ReturnType = void> = T | ((v: T) => ReturnType);

export default class DoubleLinkedList<T> {
  public tail: DoubleLinkedListNode<T> | null = null;
  public _length = 0;
  constructor(
    public head: DoubleLinkedListNode<T> | null = null,
  ) {}

  /**
   * add node to the end
   * @param v 
   */
  public push(v: T) {
    this._length ++;
    const node = new DoubleLinkedListNode(v);
    if (!this.head) {
      this.head = node;
    } else if (!this.tail) {
      node.bindPrev(this.head);
      this.tail = node;
    } else {
      node.bindPrev(this.tail);
      this.tail = node;
    }
  }

  /**
   * add to top
   */
  public unshift(v: T) {
    this._length ++;
    const node = new DoubleLinkedListNode(v);
    if (!this.head) {
      this.head = node;
    } else {
      node.bindNext(this.head);
      this.head = node;
    }
  }

  /**
   * 
   * @param v: value or function
   */
  public find(v: ValueFunc<T, boolean>) {
    const isThisNode = v instanceof Function ? v : n => n === v;
    let node = this.head;
    while(node) {
      if (isThisNode(node.value)) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  /**
   * remove particular node
   * @param v
   */
  public remove(v: ValueFunc<T, boolean>) {
    const node = this.find(v);
    if (!node) { return; }
    node.prev && (node.prev.next = node.next);
    node.next && (node.next.prev = node.prev);
    if (node === this.head) {
      this.head = node.next;
    } else if (node === this.tail) {
      this.tail = node.prev;
    }
    this._length--;
  }

  /**
   * Remove the end node
   * @returns the popped node value
   */
  public pop() {
    let node = this.tail;
    this._length = Math.max(0, this._length - 1);

    if (!node || !node.prev) {
      // only head or this list is empty
      node = this.head;
      this.head = null;
      return node?.value;
    }

    this.tail = node.prev;
    node.prev.next = null;
    return node.value;
  }

  /**
   * the list has the value
   * @param v
   * @returns 
   */
  public has(v: T) {
    const node = this.find(v);
    return Boolean(node);
  }

  /**
   * the list matches the function rules 
   * @param func 
   * @returns 
   */
  public some(func: (v: T) => boolean) {
    return Boolean(this.find(func));
  }

  /**
   * reverse the list
   */
  public reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    while(node) {
      const { prev, next } = node;
      node.prev = next;
      node.next = prev;
      node = next;
    }
  }

  /**
   * iterate the list
   * @param cb 
   */
  public forEach(cb: (v: T, index: number) => void) {
    let node = this.head;
    let idx = 0;
    while(node) {
      cb(node.value, idx);
      node = node.next;
      idx++;
    }
  }

  public toString() {
    return JSON.stringify(this.toArray());
  }

  public toArray() {
    let node = this.head;
    const res: T[] = [];
    while(node) {
      res.push(node.value);
      node = node.next;
    }
    return res;
  }

  public fromArray(arr: T[]) {
    if (arr.length > 0) {
      let prevNode;
      let currNode: DoubleLinkedListNode<T> | null= null;
      this.head = prevNode = new DoubleLinkedListNode(arr[0]);
      for (let i = 1; i < arr.length; i++) {
        currNode = new DoubleLinkedListNode(arr[i]);
        currNode.bindPrev(prevNode);
        prevNode = currNode;
      }
      this.tail = currNode;
    }
    this._length = arr.length;
  }

  public clear() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  public get length() {
    return this._length;
  }
}