import LinkedList from "@jsalgo/linked-list";

/**
 * Add to first, remove from first
 * add -> [...]
 * remove <- [...]
 */
class Stack<T> {
  public list = new LinkedList();
  constructor() {}

  public isEmpty() {
    return this.list.isEmpty();
  }

  public peek() {
    return this.list.head?.value || null;
  }

  public add(v: T) {
    this.list.prepend(v);
  }

  public remove() {
    return this.list.unshift();
  }
}

export default Stack;