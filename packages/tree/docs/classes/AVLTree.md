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

- [\_addNode](AVLTree.md#_addnode)
- [\_balance](AVLTree.md#_balance)
- [\_findClosestNode](AVLTree.md#_findclosestnode)
- [\_findLargestNode](AVLTree.md#_findlargestnode)
- [\_findSmallestNode](AVLTree.md#_findsmallestnode)
- [\_remove](AVLTree.md#_remove)
- [\_rotateLeft](AVLTree.md#_rotateleft)
- [\_rotateLeftRight](AVLTree.md#_rotateleftright)
- [\_rotateRight](AVLTree.md#_rotateright)
- [\_rotateRightLeft](AVLTree.md#_rotaterightleft)
- [\_setRoot](AVLTree.md#_setroot)
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

[binary-tree.ts:73](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L73)

## Properties

### comparator

• **comparator**: `Comparator`<`T`\>

#### Inherited from

[BinaryTree](BinaryTree.md).[comparator](BinaryTree.md#comparator)

#### Defined in

[binary-tree.ts:66](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L66)

___

### debug

• **debug**: `boolean` = `false`

#### Defined in

[avl-tree.ts:27](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/avl-tree.ts#L27)

___

### root

• **root**: ``null`` \| `AVLNode`<`T`\> = `null`

#### Overrides

[BinaryTree](BinaryTree.md).[root](BinaryTree.md#root)

#### Defined in

[avl-tree.ts:26](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/avl-tree.ts#L26)

## Methods

### \_addNode

▸ `Protected` **_addNode**(`node`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AVLNode`<`T`\> |

#### Returns

`boolean`

#### Overrides

[BinaryTree](BinaryTree.md).[_addNode](BinaryTree.md#_addnode)

#### Defined in

[avl-tree.ts:53](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/avl-tree.ts#L53)

___

### \_balance

▸ `Private` **_balance**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | ``null`` \| `AVLNode`<`T`\> |

#### Returns

`void`

#### Defined in

[avl-tree.ts:65](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/avl-tree.ts#L65)

___

### \_findClosestNode

▸ `Protected` **_findClosestNode**(`value`, `startNode?`): ``null`` \| `AVLNode`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `startNode` | ``null`` \| `AVLNode`<`T`\> |

#### Returns

``null`` \| `AVLNode`<`T`\>

#### Inherited from

[BinaryTree](BinaryTree.md).[_findClosestNode](BinaryTree.md#_findclosestnode)

#### Defined in

[binary-tree.ts:233](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L233)

___

### \_findLargestNode

▸ `Protected` **_findLargestNode**(`node`): `AVLNode`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AVLNode`<`T`\> |

#### Returns

`AVLNode`<`T`\>

#### Inherited from

[BinaryTree](BinaryTree.md).[_findLargestNode](BinaryTree.md#_findlargestnode)

#### Defined in

[binary-tree.ts:265](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L265)

___

### \_findSmallestNode

▸ `Protected` **_findSmallestNode**(`node`): `AVLNode`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AVLNode`<`T`\> |

#### Returns

`AVLNode`<`T`\>

#### Inherited from

[BinaryTree](BinaryTree.md).[_findSmallestNode](BinaryTree.md#_findsmallestnode)

#### Defined in

[binary-tree.ts:257](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/binary-tree.ts#L257)

___

### \_remove

▸ `Protected` **_remove**(`value`): ``null`` \| `AVLNode`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

``null`` \| `AVLNode`<`T`\>

the moved node's parent

#### Overrides

[BinaryTree](BinaryTree.md).[_remove](BinaryTree.md#_remove)

#### Defined in

[avl-tree.ts:59](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/avl-tree.ts#L59)

___

### \_rotateLeft

▸ `Private` **_rotateLeft**(`node`): ``null`` \| `AVLNode`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AVLNode`<`T`\> |

#### Returns

``null`` \| `AVLNode`<`T`\>

#### Defined in

[avl-tree.ts:107](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/avl-tree.ts#L107)

___

### \_rotateLeftRight

▸ `Private` **_rotateLeftRight**(`node`): ``null`` \| `AVLNode`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AVLNode`<`T`\> |

#### Returns

``null`` \| `AVLNode`<`T`\>

#### Defined in

[avl-tree.ts:125](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/avl-tree.ts#L125)

___

### \_rotateRight

▸ `Private` **_rotateRight**(`node`): ``null`` \| `AVLNode`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AVLNode`<`T`\> |

#### Returns

``null`` \| `AVLNode`<`T`\>

#### Defined in

[avl-tree.ts:116](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/avl-tree.ts#L116)

___

### \_rotateRightLeft

▸ `Private` **_rotateRightLeft**(`node`): ``null`` \| `AVLNode`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AVLNode`<`T`\> |

#### Returns

``null`` \| `AVLNode`<`T`\>

#### Defined in

[avl-tree.ts:130](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/avl-tree.ts#L130)

___

### \_setRoot

▸ `Protected` **_setRoot**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AVLNode`<`T`\> |

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

[avl-tree.ts:33](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/avl-tree.ts#L33)

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

▸ **findNode**(`value`): ``null`` \| `AVLNode`<`T`\>

Find the node by given value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

``null`` \| `AVLNode`<`T`\>

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

[avl-tree.ts:43](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/avl-tree.ts#L43)

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
