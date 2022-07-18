# @jsalgo/priority-queue

Always get the highest priority item first.

## Install

```
npm i @jsalgo/priority-queue
```

## Usage

```typescript
const queue = new PriorityQueue<string>();
queue.add('apple', 1);
queue.add('box', 2);
queue.peak();  // get 'box', coz box's priority is higher than apple
queue.poll(); // get 'box' and remove it from the queue
queue.poll(); // get 'apple'
```