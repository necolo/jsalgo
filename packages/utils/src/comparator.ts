export type PartialV<T> = T extends object ? Partial<T> : T;
export type CompareFunc<T, P = Partial<T>> = (a: P, b: P) => number;

export class Comparator<T, P = Partial<T>> {
  constructor(
    public compare: CompareFunc<T, P> = function (a: P, b: P) {
      if (a === b) {
        return 0;
      }
      return a < b ? -1 : 1;
    },
  ) {}

  /**
   * Check if a equals b
   * @param a 
   * @param b 
   * @returns 
   */
  public equals(a: P, b: P) {
    return this.compare(a, b) === 0;
  }

  /**
   * Check if a is less than b
   * @param a 
   * @param b 
   * @returns 
   */
  public lessThan(a: P, b: P) {
    return this.compare(a, b) < 0;
  }

  /**
   * check if a is greater than b
   * @param a 
   * @param b 
   * @returns 
   */
  public greaterThan(a: P, b: P) {
    return this.compare(a, b) > 0;
  }

  /**
   * Check if a is less than or equals b
   * @param a 
   * @param b 
   * @returns 
   */
  public lessThanOrEqual(a: P, b: P) {
    return this.compare(a, b) <= 0;
  }

  /**
   * Check if a is greater than or equals b
   * @param a 
   * @param b 
   * @returns 
   */
  public greaterThanOrEqual(a: P, b: P) {
    return this.compare(a, b) >= 0;
  }

  /**
   * Reverse a and b compares
   */
  public reverse() {
    const oldCompare = this.compare;
    this.compare = function (a: P, b: P) {
      return oldCompare(b, a);
    }
  }
}

export default Comparator;