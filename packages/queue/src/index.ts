import LinkedList from '@jsalgo/linked-list';

/**
 * Add to end, remove from first
 * [...] <-- add
 * remove <-- [...]
 */
export class Queue<T> {
  public linkedList: LinkedList<T> = new LinkedList<T>();
  constructor(
  ) { }

  public isEmpty() {
    return this.linkedList.isEmpty();
  }

  /**
   * Read the element at the front of the queue without removing it.
   * @returns 
   */
  public peek() {
    return this.linkedList.head?.value || null;
  }

  /**
   * add element to the end of the queue
   * @param v 
   */
  public add(v: T) {
    this.linkedList.append(v);
  }

  /**
   * remove element from the front of the queue
   * @returns 
   */
  public remove() {
    this.linkedList.unshift();
  }

  /**
   * @param [callback]
   * @return {string}
   */
  public toString() {
    return this.linkedList.toString();
  }
}

export default Queue;