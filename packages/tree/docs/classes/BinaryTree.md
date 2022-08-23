[@jsalgo/tree](../README.md) / [Exports](../modules.md) / BinaryTree

# Class: BinaryTree<T, N\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
| `N` | extends `TreeNode`<`T`\> = `TreeNode`<`T`\> |

## Hierarchy

- **`BinaryTree`**

  ↳ [`AVLTree`](AVLTree.md)

  ↳ [`RedBlackTree`](RedBlackTree.md)

  ↳ [`BinarySearchTree`](BinarySearchTree.md)

## Table of contents

### Constructors

- [constructor](BinaryTree.md#constructor)

### Properties

- [comparator](BinaryTree.md#comparator)
- [root](BinaryTree.md#root)

### Methods

- [\_addNode](BinaryTree.md#_addnode)
- [\_findClosestNode](BinaryTree.md#_findclosestnode)
- [\_findLargestNode](BinaryTree.md#_findlargestnode)
- [\_findSmallestNode](BinaryTree.md#_findsmallestnode)
- [\_remove](BinaryTree.md#_remove)
- [\_setRoot](BinaryTree.md#_setroot)
- [clear](BinaryTree.md#clear)
- [contains](BinaryTree.md#contains)
- [find](BinaryTree.md#find)
- [findClosest](BinaryTree.md#findclosest)
- [findLargest](BinaryTree.md#findlargest)
- [findNode](BinaryTree.md#findnode)
- [findSmallest](BinaryTree.md#findsmallest)
- [height](BinaryTree.md#height)
- [remove](BinaryTree.md#remove)
- [size](BinaryTree.md#size)

## Constructors

### constructor

• **new BinaryTree**<`T`, `N`\>(`compareFunc?`)

Create the BinaryTree

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
| `N` | extends `TreeNode`<`T`, `N`\> = `TreeNode`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFunc?` | `CompareFunc`<`T`\> | the customized comparator, default is (a, b) => a - b |

#### Defined in

[binary-tree.ts:73](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L73)

## Properties

### comparator

• **comparator**: `Comparator`<`T`\>

#### Defined in

[binary-tree.ts:66](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L66)

___

### root

• **root**: ``null`` \| `N` = `null`

#### Defined in

[binary-tree.ts:67](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L67)

## Methods

### \_addNode

▸ `Protected` **_addNode**(`node`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

`boolean`

#### Defined in

[binary-tree.ts:176](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L176)

___

### \_findClosestNode

▸ `Protected` **_findClosestNode**(`value`, `startNode?`): ``null`` \| `N`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `startNode` | ``null`` \| `N` |

#### Returns

``null`` \| `N`

#### Defined in

[binary-tree.ts:233](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L233)

___

### \_findLargestNode

▸ `Protected` **_findLargestNode**(`node`): `N`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

`N`

#### Defined in

[binary-tree.ts:265](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L265)

___

### \_findSmallestNode

▸ `Protected` **_findSmallestNode**(`node`): `N`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

`N`

#### Defined in

[binary-tree.ts:257](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L257)

___

### \_remove

▸ `Protected` **_remove**(`value`): ``null`` \| `N`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

``null`` \| `N`

the moved node's parent

#### Defined in

[binary-tree.ts:196](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L196)

___

### \_setRoot

▸ `Protected` **_setRoot**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

`void`

#### Defined in

[binary-tree.ts:252](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L252)

___

### clear

▸ **clear**(): `void`

Clear the tree

#### Returns

`void`

#### Defined in

[binary-tree.ts:152](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L152)

___

### contains

▸ **contains**(`value`): `boolean`

If tree contains the value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`boolean`

#### Defined in

[binary-tree.ts:123](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L123)

___

### find

▸ **find**(`value`): `undefined` \| `T`

Find the value by given key value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`undefined` \| `T`

#### Defined in

[binary-tree.ts:105](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L105)

___

### findClosest

▸ **findClosest**(`value`): `undefined` \| `T`

Find the closet value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`undefined` \| `T`

#### Defined in

[binary-tree.ts:114](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L114)

___

### findLargest

▸ **findLargest**(): `undefined` \| `T`

Find the most right value

#### Returns

`undefined` \| `T`

#### Defined in

[binary-tree.ts:142](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L142)

___

### findNode

▸ **findNode**(`value`): ``null`` \| `N`

Find the node by given value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

``null`` \| `N`

TreeNode

#### Defined in

[binary-tree.ts:92](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L92)

___

### findSmallest

▸ **findSmallest**(): `undefined` \| `T`

Find the most left value

#### Returns

`undefined` \| `T`

#### Defined in

[binary-tree.ts:131](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L131)

___

### height

▸ **height**(): `any`

Get the height of the tree

#### Returns

`any`

#### Defined in

[binary-tree.ts:168](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L168)

___

### remove

▸ **remove**(...`values`): `void`

Remove values

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `T`[] |

#### Returns

`void`

#### Defined in

[binary-tree.ts:81](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L81)

___

### size

▸ **size**(): `any`

Get the size of the tree

#### Returns

`any`

#### Defined in

[binary-tree.ts:160](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L160)
