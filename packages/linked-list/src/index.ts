import { Comparator, CompareFunc, PartialV } from '@jsalgo/utils';
export class LinkNode<T> {
  public value: T;
  public next: LinkNode<T> | null;

  constructor(v: T) {
    this.value = v;
    this.next = null;
  }
}

export class LinkedList<T, P = PartialV<T>> {
  public head: LinkNode<T> | null = null;
  public tail: LinkNode<T> | null = null;
  public comparator: Comparator<T>;
  private _length = 0;
  constructor(compareFunc?: CompareFunc<T>) {
    this.comparator = new Comparator(compareFunc);
  }

  /* -------------------------------------------------------------------------- */
  /*                                     Add                                    */
  /* -------------------------------------------------------------------------- */

  /**
   * add to tail of the list
   * @param {*} v
   */
  public append(v: T) {
    const node = new LinkNode(v);
    if (!this.tail) { // no tail means no head means this is an empty list
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this._length++;
  }

  /**
   * add to head of the list
   * @param {*} v
   */
  public prepend(v: T) {
    const node = new LinkNode(v);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this._length++;
  }

  /**
   * concat an array
   * @param arr 
   */
  public concatArray(arr: T[]) {
    for (let i = 0; i < arr.length; i++) {
      this.append(arr[i]);
    }
  }

  /**
   * concat a linked-list
   * @param list 
   */
  public concat(list: LinkedList<T>) {
    if (!this.tail) {
      this.head = this.tail = list.head;
    } else {
      this.tail.next = list.head;
      this.tail = list.tail;
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Find                                    */
  /* -------------------------------------------------------------------------- */

  private _findNode(v: P | T) {
    const { comparator } = this;
    let prev: LinkNode<T> | null = null;
    let node = this.head;
    while(node) {
      if (comparator.equals(node.value, v)) {
        return { prev, node };
      }
      prev = node;
      node = node.next;
    }
    return {
      prev: null,
      node: null,
    };
  }

  /**
   *
   * @param {string|number|Function} v
   * @returns
   */
  public find(v: P) {
    const { node } = this._findNode(v);
    return node?.value || null;
  }

  /**
   *
   * @param {string|number|Function} v
   * @returns
   */
  public findPrev(v: P) {
    const { prev } = this._findNode(v);
    return prev?.value || null;
  }

  /**
   *
   * @param {string|number|Function} v
   * @returns {boolean}
   */
    public has(v: P) {
      return Boolean(this.find(v));
    }

  /* -------------------------------------------------------------------------- */
  /*                                   Remove                                   */
  /* -------------------------------------------------------------------------- */

  /**
   * remove the particular node element
   * @param {string|number|Function} v
   * @returns
   */
  public remove(v: P) {
    const { node, prev } = this._findNode(v);
    if (!node) {
      return;
    }
    this._length--;
    if (!prev) {
      this.tail = this.head = null;
    } else {
      prev.next = node.next;
    }
    return node.value;
  }

  /**
   * remove the head element
   */
  public unshift() {
    if (!this.head) {
      return null;
    }
    this._length--;
    const { value } = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = this.tail = null;
    }
    return value;
  }

  /**
   * remove the last element
   */
  public pop() {
    if (!this.tail) {
      return;
    }
    this._length--;
    const { value } = this.tail;
    const { prev } = this._findNode(this.tail.value);
    if (!prev) {
      this.head = this.tail = null;
    } else {
      prev.next = null;
      this.tail = prev;
    }
    return value;
  }

  /**
   * clear all elements
   */
  public clear() {
    this.head = this.tail = null;
    this._length = 0;
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Utils                                   */
  /* -------------------------------------------------------------------------- */

  /**
   * For each
   * @param callback 
   */
  public forEach(callback: (value: T) => void) {
    let node = this.head;
    while (node) {
      callback(node.value);
      node = node.next;
    }
  }

  public reverse() {
    let node = this.head;
    let nextNode = node?.next;
    let prevNode: LinkNode<T> | null = null;
    while (nextNode) {
      prevNode = node;
      node = nextNode;
      nextNode = nextNode.next;
      node.next = prevNode;
    }
    this.tail = this.head;
    this.tail!.next = null;
    this.head = node;
  }

  public fromArray(arr: T[]) {
    this.clear();
    for (let i = 0; i < arr.length; i++) {
      this.append(arr[i]);
    }
  }

  public toArray() {
    const res: T[] = [];
    this.forEach(value => res.push(value));
    return res;
  }

  public toString() {
    return JSON.stringify(this.toArray());
  }

  public isEmpty() {
    return this.head === null;
  }

  public get length() {
    return this._length;
  }
}

export default LinkedList;
