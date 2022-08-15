import { TreeNode } from './type';

export function findTreeNode<T extends TreeNode<any>>(
  v: number,
  fromNode: T | null,
  fromNodeParent: T | null = null,
) {
  let parent = fromNodeParent;
  let node = fromNode;
  while(node) {
    if (node.v === v) {
      return { parent, node };
    }
    parent = node;
    if (node.v < v) {
      node = parent.right;
      continue;
    }
    node = parent.left;
  }
  return { parent, node };
}

export function addChild<T extends TreeNode<any>>(parent: T, node: T) {
  if (node.v < parent.v) {
    parent.left = node;
  } else {
    parent.right = node;
  }
}