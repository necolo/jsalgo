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

[segment-tree.ts:13](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/segment-tree.ts#L13)

## Properties

### fallbackValue

• **fallbackValue**: `T`

#### Defined in

[segment-tree.ts:16](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/segment-tree.ts#L16)

___

### inputs

• **inputs**: `T`[]

#### Defined in

[segment-tree.ts:14](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/segment-tree.ts#L14)

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

[segment-tree.ts:15](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/segment-tree.ts#L15)

___

### tree

• **tree**: `T`[]

The array for the tree

#### Defined in

[segment-tree.ts:5](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/segment-tree.ts#L5)

## Methods

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

T

#### Defined in

[segment-tree.ts:31](https://github.com/Necolo/jsalgo/blob/5898ba2/packages/tree/src/segment-tree.ts#L31)
