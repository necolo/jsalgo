class Node {
    constructor(I, F, next = null, prev = null) {
        this.I = I;
        this.F = F;
        this.next = next;
        this.prev = prev;
    }
}

class Semaphore {
    constructor(count = 1) {
        this.count = count;
        this.head = null;
        this.tail = null;
    }

    // wait
    p(I = 1) {
        return new Promise((F) => {
            if (this.count >= I) {
                this.count -= I;
                return F();
            }
            const tail = this.tail;
            const node = new Node(I, F, null, tail);
            if (tail) {
                tail.next = node;
            } else {
                this.head = node;
            }
            this.tail = node;
        })    
    }

    // signal
    v(X = 1) {
        this.count += X;
        let node = this.head;
        while (node && this.count > 0) {
            const { I, F, next, prev } = node;
            if (I <= this.count) {
                this.count -= I;
                if (prev) {
                    prev.next = next;
                } else {
                    this.head = next;
                }
                if (next) {
                    next.prev = prev;
                } else {
                    this.tail = prev;
                }
                node.next = node.prev = null;
                F();
            }
            node = next;
        }
    }
}

module.exports = Semaphore;