import LinkedList from "@jsalgo/linked-list";
import { Comparator, CompareFunc, PartialV } from '@jsalgo/utils';

type NodeValue<T> = { key: string; value: T };

class HashTable<T> {
  public bucket: LinkedList<NodeValue<T>>[];

  constructor(
    public bucketCount = 32,
  ) {
    const compareFunc: CompareFunc<NodeValue<T>> = (a, b) => {
      if (a.key === b.key) {
        return 0;
      }
      return -1;
    };

    this.bucket = new Array(bucketCount).fill(null).map(() => new LinkedList(compareFunc));
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
    return this.bucket[idx].find({ key })?.value;
  }

  public remove(key: string) {
    const idx = this.hash(key);
    const list = this.bucket[idx];
    list.remove({ key });
  }

  public has(key: string) {
    const idx = this.hash(key);
    return this.bucket[idx].has({ key });
  }

  public toString() {
    return JSON.stringify(this.bucket.map(list => list.toArray()));
  }

  public size() {
    return this.bucket.reduce((acc, list) => acc + list.length, 0);
  }
}

export default HashTable;