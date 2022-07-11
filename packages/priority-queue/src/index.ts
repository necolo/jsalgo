import { Heap } from '@jsalgo/heap';

class Node<T> {
  constructor(
    public value: T,
    public priority: number,
  ) {}
}

export class PriorityQueue<T> {
  private _heap = new Heap<Node<T>>((a, b) => b.priority - a.priority);

  /**
   * Add a value to the queue with priority
   * @param value 
   * @param priority 
   */
  add(value: T, priority: number): void {
    this._heap.add(new Node(value, priority));
  }

  /**
   * Poll the highest priority value
   * @returns value
   */
  peak() {
    return this._heap.poll()?.value;
  }

  /**
   * Clear the list
   */
  clear() {
    this._heap.list.length = 0;
  }

  /**
   * Get the queue list
   */
  get length() {
    return this._heap.list.length;
  }
}

export default PriorityQueue;