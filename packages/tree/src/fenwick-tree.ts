export class FenwickTree<T> {
  tree: T[];

  constructor(
    public inputs: T[],
    // F = A + B
    public sum: (a: T, b: T) => T,
    public initValue: T,
  ) {
    this.tree = new Array(inputs.length + 1).fill(initValue);
    for (let i = 0; i < inputs.length; i++) {
      this.update(i, inputs[i]);
    }
  }

  /**
   * 
   * @param _i the index of the input array, start from 0
   * @param diff the diff from the old value
   */
  update(_i: number, diff: T) {
    if (_i < 0 || _i >= this.tree.length - 1) {
      throw new Error(`Given index ${_i} is out of range`);
    }
    const { tree, sum } = this;
    for (let i = _i + 1; i < tree.length; i += (i & -i)) {
      tree[i] = sum(tree[i], diff);
    }
  }

  /**
   * 
   * @param i the index of the input array, start from 0
   * @returns
   */
  query(_i: number) {
    if (_i < 0 || _i >= this.tree.length - 1) {
      throw new Error(`Given index ${_i} is out of range`);
    }
    const { tree, sum } = this;
    let total = this.initValue;
    for (let i = _i + 1; i > 0; i -= (i & -i)) {
      total = sum(total, tree[i]);
    }
    return total;
  }
}

export const BinaryIndexTree = FenwickTree;
export default FenwickTree;