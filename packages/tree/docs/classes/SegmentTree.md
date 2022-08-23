[@jsalgo/tree](../README.md) / [Exports](../modules.md) / SegmentTree

# Class: SegmentTree<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](SegmentTree.md#constructor)

### Properties

- [fallbackValue](SegmentTree.md#fallbackvalue)
- [inputs](SegmentTree.md#inputs)
- [operation](SegmentTree.md#operation)
- [tree](SegmentTree.md#tree)

### Methods

- [\_buildTree](SegmentTree.md#_buildtree)
- [\_leftIndex](SegmentTree.md#_leftindex)
- [\_parentIndex](SegmentTree.md#_parentindex)
- [\_query](SegmentTree.md#_query)
- [\_rightIndex](SegmentTree.md#_rightindex)
- [query](SegmentTree.md#query)

## Constructors

### constructor

• **new SegmentTree**<`T`\>(`inputs`, `operation`, `fallbackValue`)

Create the segment tree

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputs` | `T`[] | the initial values |
| `operation` | (`a`: `T`, `b`: `T`) => `T` | the operation to calculate two values |
| `fallbackValue` | `T` | the fallback value |

#### Defined in

[segment-tree.ts:13](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/segment-tree.ts#L13)

## Properties

### fallbackValue

• **fallbackValue**: `T`

#### Defined in

[segment-tree.ts:16](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/segment-tree.ts#L16)

___

### inputs

• **inputs**: `T`[]

#### Defined in

[segment-tree.ts:14](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/segment-tree.ts#L14)

___

### operation

• **operation**: (`a`: `T`, `b`: `T`) => `T`

#### Type declaration

▸ (`a`, `b`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

##### Returns

`T`

#### Defined in

[segment-tree.ts:15](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/segment-tree.ts#L15)

___

### tree

• **tree**: `T`[]

The array for the tree

#### Defined in

[segment-tree.ts:5](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/segment-tree.ts#L5)

## Methods

### \_buildTree

▸ `Private` **_buildTree**(`low`, `high`, `pos`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `low` | `number` |
| `high` | `number` |
| `pos` | `number` |

#### Returns

`void`

#### Defined in

[segment-tree.ts:52](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/segment-tree.ts#L52)

___

### \_leftIndex

▸ `Private` **_leftIndex**(`i`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |

#### Returns

`number`

#### Defined in

[segment-tree.ts:66](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/segment-tree.ts#L66)

___

### \_parentIndex

▸ `Private` **_parentIndex**(`i`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |

#### Returns

`number`

#### Defined in

[segment-tree.ts:74](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/segment-tree.ts#L74)

___

### \_query

▸ `Private` **_query**(`qLow`, `qHigh`, `low`, `high`, `pos`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `qLow` | `number` |
| `qHigh` | `number` |
| `low` | `number` |
| `high` | `number` |
| `pos` | `number` |

#### Returns

`any`

#### Defined in

[segment-tree.ts:38](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/segment-tree.ts#L38)

___

### \_rightIndex

▸ `Private` **_rightIndex**(`i`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |

#### Returns

`number`

#### Defined in

[segment-tree.ts:70](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/segment-tree.ts#L70)

___

### query

▸ **query**(`start`, `end`): `any`

Query the value from the given range

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | the start position |
| `end` | `number` | the end position |

#### Returns

`any`

#### Defined in

[segment-tree.ts:31](https://github.com/Necolo/jsalgo/blob/0f5ab7c/packages/tree/src/segment-tree.ts#L31)
