[@jsalgo/tree](../README.md) / [Exports](../modules.md) / FenwickTree

# Class: FenwickTree<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](FenwickTree.md#constructor)

### Properties

- [initValue](FenwickTree.md#initvalue)
- [inputs](FenwickTree.md#inputs)
- [sum](FenwickTree.md#sum)
- [tree](FenwickTree.md#tree)

### Methods

- [query](FenwickTree.md#query)
- [update](FenwickTree.md#update)

## Constructors

### constructor

• **new FenwickTree**<`T`\>(`inputs`, `sum`, `initValue`)

Create the fenwick tree

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputs` | `T`[] | the initial values |
| `sum` | (`a`: `T`, `b`: `T`) => `T` | the operator to get the statistics of the values |
| `initValue` | `T` | the fallback/initial value for an empty node |

#### Defined in

[fenwick-tree.ts:13](https://github.com/Necolo/jsalgo/blob/23cbefe/packages/tree/src/fenwick-tree.ts#L13)

## Properties

### initValue

• **initValue**: `T`

#### Defined in

[fenwick-tree.ts:16](https://github.com/Necolo/jsalgo/blob/23cbefe/packages/tree/src/fenwick-tree.ts#L16)

___

### inputs

• **inputs**: `T`[]

#### Defined in

[fenwick-tree.ts:14](https://github.com/Necolo/jsalgo/blob/23cbefe/packages/tree/src/fenwick-tree.ts#L14)

___

### sum

• **sum**: (`a`: `T`, `b`: `T`) => `T`

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

[fenwick-tree.ts:15](https://github.com/Necolo/jsalgo/blob/23cbefe/packages/tree/src/fenwick-tree.ts#L15)

___

### tree

• **tree**: `T`[]

The array of the tree

#### Defined in

[fenwick-tree.ts:5](https://github.com/Necolo/jsalgo/blob/23cbefe/packages/tree/src/fenwick-tree.ts#L5)

## Methods

### query

▸ **query**(`_i`): `T`

Query the operated value on the position of the given array

#### Parameters

| Name | Type |
| :------ | :------ |
| `_i` | `number` |

#### Returns

`T`

the operated value

#### Defined in

[fenwick-tree.ts:44](https://github.com/Necolo/jsalgo/blob/23cbefe/packages/tree/src/fenwick-tree.ts#L44)

___

### update

▸ **update**(`_i`, `diff`): `void`

Update the value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_i` | `number` | the index of the input array, start from 0 |
| `diff` | `T` | the diff from the old value |

#### Returns

`void`

#### Defined in

[fenwick-tree.ts:29](https://github.com/Necolo/jsalgo/blob/23cbefe/packages/tree/src/fenwick-tree.ts#L29)
