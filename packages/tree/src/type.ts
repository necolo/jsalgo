export interface TreeNode<T> {
  left: T | null;
  right: T | null;
  v: number;
}

export interface Tree<T> {
  root: TreeNode<T> | null;

  add(v: number): void;
  remove(v: number): void;
  contains(v: number): void;
  clear(): void;
}