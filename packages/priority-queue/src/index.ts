import Heap from '@jsalgo/heap';
import { Comparator, CompareFunc } from '@jsalgo/utils';

export class PriorityQueue<T> {
  private heap: Heap<T>;
  private priorityMap = new Map<Partial<T>, number>();

  constructor() {
    const { priorityMap } = this;
    this.heap = new Heap(function (a, b) {
      const pa = priorityMap.get(a) || -Number.MAX_SAFE_INTEGER;
      const pb = priorityMap.get(b) || -Number.MAX_SAFE_INTEGER;
      return pb - pa;
    });
  }

  /**
   * Add item with it's priority
   * If priority is not given, it will be set to lowest priority
   * @param v
   * @param priority 
   */
  public add(v: T, priority = -Number.MAX_SAFE_INTEGER) {
    this.priorityMap.set(v, priority);
    this.heap.add(v);
  }

  /**
   * Remove item
   * @param v 
   */
  public remove(v: T) {
    this.heap.remove(v);
    this.priorityMap.delete(v);
  }

  /**
   * Return the max priority item
   */
  public poll(): T {
    const v = this.heap.poll();
    this.priorityMap.delete(v);
    return v;
  }

  /**
   * Change the priority of the item
   * @param v 
   * @param priority 
   */
  public changePriority(v: T, priority: number) {
    this.remove(v);
    this.add(v, priority);
  }

  /**
   * Get the max priority number in current list
   * @returns {number} max priority number
   */
  public getMaxPriority(): number {
    const root = this.heap.getRoot();
    return this.priorityMap.get(root) || -Number.MAX_SAFE_INTEGER;
  }

  public get length(): number {
    return this.heap.length;
  }
}

export default PriorityQueue;