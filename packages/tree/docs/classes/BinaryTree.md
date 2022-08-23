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

[binary-tree.ts:73](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L73)

## Properties

### comparator

• **comparator**: `Comparator`<`T`\>

#### Defined in

[binary-tree.ts:66](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L66)

___

### root

• **root**: ``null`` \| `N` = `null`

#### Defined in

[binary-tree.ts:67](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L67)

## Methods

### clear

▸ **clear**(): `void`

Clear the tree

#### Returns

`void`

#### Defined in

[binary-tree.ts:152](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L152)

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

T

#### Defined in

[binary-tree.ts:123](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L123)

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

T

#### Defined in

[binary-tree.ts:105](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L105)

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

T

#### Defined in

[binary-tree.ts:114](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L114)

___

### findLargest

▸ **findLargest**(): `undefined` \| `T`

Find the most right value

#### Returns

`undefined` \| `T`

T | undefined

#### Defined in

[binary-tree.ts:142](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L142)

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

TreeNode<T>

#### Defined in

[binary-tree.ts:92](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L92)

___

### findSmallest

▸ **findSmallest**(): `undefined` \| `T`

Find the most left value

#### Returns

`undefined` \| `T`

T | undefined

#### Defined in

[binary-tree.ts:131](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L131)

___

### height

▸ **height**(): `any`

Get the height of the tree

#### Returns

`any`

number

#### Defined in

[binary-tree.ts:168](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L168)

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

[binary-tree.ts:81](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L81)

___

### size

▸ **size**(): `any`

Get the size of the tree

#### Returns

`any`

number

#### Defined in

[binary-tree.ts:160](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L160)
