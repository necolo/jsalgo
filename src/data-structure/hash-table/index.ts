import LinkedList from "../linked-list";

class HashTable<T> {
  public bucket: LinkedList<{ key: string, value: T }>[];

  constructor(
    public bucketCount = 32,
  ) {
    this.bucket = new Array(bucketCount).fill(null).map(() => new LinkedList());
  }

  /**
   *
   * @param {string} key
   * @return {int} index
   */
  private hash(key: string) {
    // Sum all characters' charCodeAt number
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );

    // Reduce hash number so it would fit hash table size.
    return hash % this.bucketCount;
  }

  public put(key: string, value: T) {
    const idx = this.hash(key);
    this.bucket[idx].append({ key, value });
  }

  public get(key: string) {
    const idx = this.hash(key);
    const node = this.bucket[idx].find(data => data.key === key);
    if (node) {
      return node.value.value;
    } else {
      return null;
    }
  }

  public remove(key: string) {
    const idx = this.hash(key);
    const list = this.bucket[idx];
    const targetNode = list.find(data => data.key === key);
    targetNode && list.remove(targetNode.value);
  }

  public has(key: string) {
    const idx = this.hash(key);
    return this.bucket[idx].has(data => data.key === key);
  }

  public toString() {
    return JSON.stringify(this.bucket.map(list => list.toArray()));
  }

  public size() {
    return this.bucket.reduce((acc, list) => acc + list.length, 0);
  }
}

export default HashTable;