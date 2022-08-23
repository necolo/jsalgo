[@jsalgo/tree](../README.md) / [Exports](../modules.md) / AVLTree

# Class: AVLTree<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

## Hierarchy

- [`BinaryTree`](BinaryTree.md)<`T`, `AVLNode`<`T`\>\>

  ↳ **`AVLTree`**

## Table of contents

### Constructors

- [constructor](AVLTree.md#constructor)

### Properties

- [comparator](AVLTree.md#comparator)
- [debug](AVLTree.md#debug)
- [root](AVLTree.md#root)

### Methods

- [add](AVLTree.md#add)
- [clear](AVLTree.md#clear)
- [contains](AVLTree.md#contains)
- [find](AVLTree.md#find)
- [findClosest](AVLTree.md#findclosest)
- [findLargest](AVLTree.md#findlargest)
- [findNode](AVLTree.md#findnode)
- [findSmallest](AVLTree.md#findsmallest)
- [height](AVLTree.md#height)
- [remove](AVLTree.md#remove)
- [size](AVLTree.md#size)

## Constructors

### constructor

• **new AVLTree**<`T`\>(`compareFunc?`)

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

### debug

• **debug**: `boolean` = `false`

#### Defined in

[avl-tree.ts:27](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/avl-tree.ts#L27)

___

### root

• **root**: ``null`` \| `AVLNode`<`T`\> = `null`

#### Overrides

[BinaryTree](BinaryTree.md).[root](BinaryTree.md#root)

#### Defined in

[avl-tree.ts:26](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/avl-tree.ts#L26)

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

[avl-tree.ts:33](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/avl-tree.ts#L33)

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

▸ **findNode**(`value`): ``null`` \| `AVLNode`<`T`\>

Find the node by given value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

``null`` \| `AVLNode`<`T`\>

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

#### Overrides

[BinaryTree](BinaryTree.md).[remove](BinaryTree.md#remove)

#### Defined in

[avl-tree.ts:43](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/avl-tree.ts#L43)

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
