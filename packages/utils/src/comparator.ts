export type PartialV<T> = T extends object ? Partial<T> : T;
export type CompareFunc<T> = (a: T, b: T) => number;

export class Comparator<T> {
  constructor(
    public compare: CompareFunc<T> = function (a: T, b: T) {
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
  public equals(a: T, b: T) {
    return this.compare(a, b) === 0;
  }

  /**
   * Check if a is less than b
   * @param a 
   * @param b 
   * @returns 
   */
  public lessThan(a: T, b: T) {
    return this.compare(a, b) < 0;
  }

  /**
   * check if a is greater than b
   * @param a 
   * @param b 
   * @returns 
   */
  public greaterThan(a: T, b: T) {
    return this.compare(a, b) > 0;
  }

  /**
   * Check if a is less than or equals b
   * @param a 
   * @param b 
   * @returns 
   */
  public lessThanOrEqual(a: T, b: T) {
    return this.compare(a, b) <= 0;
  }

  /**
   * Check if a is greater than or equals b
   * @param a 
   * @param b 
   * @returns 
   */
  public greaterThanOrEqual(a: T, b: T) {
    return this.compare(a, b) >= 0;
  }

  /**
   * Reverse a and b compares
   */
  public reverse() {
    const oldCompare = this.compare;
    this.compare = function (a: T, b: T) {
      return oldCompare(b, a);
    }
  }
}

export default Comparator;