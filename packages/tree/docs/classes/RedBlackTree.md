[@jsalgo/tree](../README.md) / [Exports](../modules.md) / RedBlackTree

# Class: RedBlackTree<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

## Hierarchy

- [`BinaryTree`](BinaryTree.md)<`T`, `RBNode`<`T`\>\>

  ↳ **`RedBlackTree`**

## Table of contents

### Constructors

- [constructor](RedBlackTree.md#constructor)

### Properties

- [comparator](RedBlackTree.md#comparator)
- [root](RedBlackTree.md#root)

### Methods

- [\_addNode](RedBlackTree.md#_addnode)
- [\_findClosestNode](RedBlackTree.md#_findclosestnode)
- [\_findLargestNode](RedBlackTree.md#_findlargestnode)
- [\_findSmallestNode](RedBlackTree.md#_findsmallestnode)
- [\_remove](RedBlackTree.md#_remove)
- [\_rotateLeft](RedBlackTree.md#_rotateleft)
- [\_rotateRight](RedBlackTree.md#_rotateright)
- [\_setRoot](RedBlackTree.md#_setroot)
- [add](RedBlackTree.md#add)
- [clear](RedBlackTree.md#clear)
- [contains](RedBlackTree.md#contains)
- [find](RedBlackTree.md#find)
- [findClosest](RedBlackTree.md#findclosest)
- [findLargest](RedBlackTree.md#findlargest)
- [findNode](RedBlackTree.md#findnode)
- [findSmallest](RedBlackTree.md#findsmallest)
- [height](RedBlackTree.md#height)
- [remove](RedBlackTree.md#remove)
- [size](RedBlackTree.md#size)

## Constructors

### constructor

• **new RedBlackTree**<`T`\>(`compareFunc?`)

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

[binary-tree.ts:73](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L73)

## Properties

### comparator

• **comparator**: `Comparator`<`T`\>

#### Inherited from

[BinaryTree](BinaryTree.md).[comparator](BinaryTree.md#comparator)

#### Defined in

[binary-tree.ts:66](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L66)

___

### root

• **root**: ``null`` \| `RBNode`<`T`\> = `null`

#### Overrides

[BinaryTree](BinaryTree.md).[root](BinaryTree.md#root)

#### Defined in

[red-black-tree.ts:50](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/red-black-tree.ts#L50)

## Methods

### \_addNode

▸ `Protected` **_addNode**(`node`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `RBNode`<`T`\> |

#### Returns

`boolean`

#### Overrides

[BinaryTree](BinaryTree.md).[_addNode](BinaryTree.md#_addnode)

#### Defined in

[red-black-tree.ts:72](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/red-black-tree.ts#L72)

___

### \_findClosestNode

▸ `Protected` **_findClosestNode**(`value`, `startNode?`): ``null`` \| `RBNode`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `startNode` | ``null`` \| `RBNode`<`T`\> |

#### Returns

``null`` \| `RBNode`<`T`\>

#### Inherited from

[BinaryTree](BinaryTree.md).[_findClosestNode](BinaryTree.md#_findclosestnode)

#### Defined in

[binary-tree.ts:233](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L233)

___

### \_findLargestNode

▸ `Protected` **_findLargestNode**(`node`): `RBNode`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `RBNode`<`T`\> |

#### Returns

`RBNode`<`T`\>

#### Inherited from

[BinaryTree](BinaryTree.md).[_findLargestNode](BinaryTree.md#_findlargestnode)

#### Defined in

[binary-tree.ts:265](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L265)

___

### \_findSmallestNode

▸ `Protected` **_findSmallestNode**(`node`): `RBNode`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `RBNode`<`T`\> |

#### Returns

`RBNode`<`T`\>

#### Inherited from

[BinaryTree](BinaryTree.md).[_findSmallestNode](BinaryTree.md#_findsmallestnode)

#### Defined in

[binary-tree.ts:257](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L257)

___

### \_remove

▸ `Protected` **_remove**(`value`): ``null`` \| `RBNode`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

``null`` \| `RBNode`<`T`\>

the moved node's parent

#### Overrides

[BinaryTree](BinaryTree.md).[_remove](BinaryTree.md#_remove)

#### Defined in

[red-black-tree.ts:151](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/red-black-tree.ts#L151)

___

### \_rotateLeft

▸ `Private` **_rotateLeft**(`n`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `RBNode`<`T`\> |

#### Returns

`void`

#### Defined in

[red-black-tree.ts:121](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/red-black-tree.ts#L121)

___

### \_rotateRight

▸ `Private` **_rotateRight**(`n`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `RBNode`<`T`\> |

#### Returns

`void`

#### Defined in

[red-black-tree.ts:137](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/red-black-tree.ts#L137)

___

### \_setRoot

▸ `Protected` **_setRoot**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `RBNode`<`T`\> |

#### Returns

`void`

#### Inherited from

[BinaryTree](BinaryTree.md).[_setRoot](BinaryTree.md#_setroot)

#### Defined in

[binary-tree.ts:252](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L252)

___

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

[red-black-tree.ts:56](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/red-black-tree.ts#L56)

___

### clear

▸ **clear**(): `void`

Clear the tree

#### Returns

`void`

#### Inherited from

[BinaryTree](BinaryTree.md).[clear](BinaryTree.md#clear)

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

#### Inherited from

[BinaryTree](BinaryTree.md).[contains](BinaryTree.md#contains)

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

#### Inherited from

[BinaryTree](BinaryTree.md).[find](BinaryTree.md#find)

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

#### Inherited from

[BinaryTree](BinaryTree.md).[findClosest](BinaryTree.md#findclosest)

#### Defined in

[binary-tree.ts:114](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L114)

___

### findLargest

▸ **findLargest**(): `undefined` \| `T`

Find the most right value

#### Returns

`undefined` \| `T`

#### Inherited from

[BinaryTree](BinaryTree.md).[findLargest](BinaryTree.md#findlargest)

#### Defined in

[binary-tree.ts:142](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L142)

___

### findNode

▸ **findNode**(`value`): ``null`` \| `RBNode`<`T`\>

Find the node by given value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

``null`` \| `RBNode`<`T`\>

TreeNode

#### Inherited from

[BinaryTree](BinaryTree.md).[findNode](BinaryTree.md#findnode)

#### Defined in

[binary-tree.ts:92](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L92)

___

### findSmallest

▸ **findSmallest**(): `undefined` \| `T`

Find the most left value

#### Returns

`undefined` \| `T`

#### Inherited from

[BinaryTree](BinaryTree.md).[findSmallest](BinaryTree.md#findsmallest)

#### Defined in

[binary-tree.ts:131](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L131)

___

### height

▸ **height**(): `any`

Get the height of the tree

#### Returns

`any`

#### Inherited from

[BinaryTree](BinaryTree.md).[height](BinaryTree.md#height)

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

#### Overrides

[BinaryTree](BinaryTree.md).[remove](BinaryTree.md#remove)

#### Defined in

[red-black-tree.ts:66](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/red-black-tree.ts#L66)

___

### size

▸ **size**(): `any`

Get the size of the tree

#### Returns

`any`

#### Inherited from

[BinaryTree](BinaryTree.md).[size](BinaryTree.md#size)

#### Defined in

[binary-tree.ts:160](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L160)
