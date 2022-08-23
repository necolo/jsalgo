[@jsalgo/tree](../README.md) / [Exports](../modules.md) / BinarySearchTree

# Class: BinarySearchTree<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

## Hierarchy

- [`BinaryTree`](BinaryTree.md)<`T`\>

  ↳ **`BinarySearchTree`**

## Table of contents

### Constructors

- [constructor](BinarySearchTree.md#constructor)

### Properties

- [comparator](BinarySearchTree.md#comparator)
- [root](BinarySearchTree.md#root)

### Methods

- [add](BinarySearchTree.md#add)
- [clear](BinarySearchTree.md#clear)
- [contains](BinarySearchTree.md#contains)
- [find](BinarySearchTree.md#find)
- [findClosest](BinarySearchTree.md#findclosest)
- [findLargest](BinarySearchTree.md#findlargest)
- [findNode](BinarySearchTree.md#findnode)
- [findSmallest](BinarySearchTree.md#findsmallest)
- [height](BinarySearchTree.md#height)
- [remove](BinarySearchTree.md#remove)
- [size](BinarySearchTree.md#size)

## Constructors

### constructor

• **new BinarySearchTree**<`T`\>(`compareFunc?`)

Create the BinaryTree

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFunc?` | `CompareFunc`<`T`\> | the customized comparator, default is (a, b) => a - b |

#### Inherited from

[BinaryTree](BinaryTree.md).[constructor](BinaryTree.md#constructor)

#### Defined in

[binary-tree.ts:73](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L73)

## Properties

### comparator

• **comparator**: `Comparator`<`T`\>

#### Inherited from

[BinaryTree](BinaryTree.md).[comparator](BinaryTree.md#comparator)

#### Defined in

[binary-tree.ts:66](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L66)

___

### root

• **root**: ``null`` \| `TreeNode`<`T`\> = `null`

#### Inherited from

[BinaryTree](BinaryTree.md).[root](BinaryTree.md#root)

#### Defined in

[binary-tree.ts:67](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L67)

## Methods

### add

▸ **add**(...`values`): `void`

Add values

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `T`[] |

#### Returns

`void`

#### Defined in

[binary-search-tree.ts:9](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-search-tree.ts#L9)

___

### clear

▸ **clear**(): `void`

Clear the tree

#### Returns

`void`

#### Inherited from

[BinaryTree](BinaryTree.md).[clear](BinaryTree.md#clear)

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

#### Inherited from

[BinaryTree](BinaryTree.md).[contains](BinaryTree.md#contains)

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

#### Inherited from

[BinaryTree](BinaryTree.md).[find](BinaryTree.md#find)

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

#### Inherited from

[BinaryTree](BinaryTree.md).[findClosest](BinaryTree.md#findclosest)

#### Defined in

[binary-tree.ts:114](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L114)

___

### findLargest

▸ **findLargest**(): `undefined` \| `T`

Find the most right value

#### Returns

`undefined` \| `T`

T | undefined

#### Inherited from

[BinaryTree](BinaryTree.md).[findLargest](BinaryTree.md#findlargest)

#### Defined in

[binary-tree.ts:142](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L142)

___

### findNode

▸ **findNode**(`value`): ``null`` \| `TreeNode`<`T`\>

Find the node by given value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

``null`` \| `TreeNode`<`T`\>

TreeNode<T>

#### Inherited from

[BinaryTree](BinaryTree.md).[findNode](BinaryTree.md#findnode)

#### Defined in

[binary-tree.ts:92](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L92)

___

### findSmallest

▸ **findSmallest**(): `undefined` \| `T`

Find the most left value

#### Returns

`undefined` \| `T`

T | undefined

#### Inherited from

[BinaryTree](BinaryTree.md).[findSmallest](BinaryTree.md#findsmallest)

#### Defined in

[binary-tree.ts:131](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L131)

___

### height

▸ **height**(): `any`

Get the height of the tree

#### Returns

`any`

number

#### Inherited from

[BinaryTree](BinaryTree.md).[height](BinaryTree.md#height)

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

#### Inherited from

[BinaryTree](BinaryTree.md).[remove](BinaryTree.md#remove)

#### Defined in

[binary-tree.ts:81](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L81)

___

### size

▸ **size**(): `any`

Get the size of the tree

#### Returns

`any`

number

#### Inherited from

[BinaryTree](BinaryTree.md).[size](BinaryTree.md#size)

#### Defined in

[binary-tree.ts:160](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/binary-tree.ts#L160)
