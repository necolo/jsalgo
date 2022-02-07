const tests = {};
tests['event-loop'] = () => {
    let count = 0;
    setImmediate(() => {
        console.log(6);
    });
    setInterval(() => {
        if (--count > -3) {
            console.log(count);
        }
    });
    setTimeout(() => {
        setTimeout(() => {
            console.log(5);
        });
        setImmediate(() => {
            console.log(8);
        });
    });
    var a = new Promise((resolve, reject) => {
        resolve(1);
        console.log(2);
        reject(3);
    });
    a.then(console.log).catch(console.log);
    console.log(7);

    // 2,7,1,-1,6,8,-2,5
};

tests['promise'] = test2;
function test2() {
    const a = new Promise((resolve, reject) => {
        reject(1);
        // resolve(1);
    });
    const b = new Promise((resolve, reject) => {
        reject(2);
        // resolve(2);
    });
    Promise.all([a, b]).then(console.log).catch(console.log);
}

const a = new Promise((resolve, reject) => { resolve() });

tests['setImmediate'] = test3;
function test3() {
    setTimeout(() => {
        setTimeout(() => console.log(1), 0);
        setImmediate(() => console.log(2));
        a.then(() => console.log(5));
        console.log(3);
    }, 0);
    console.log(4);
}

function test4() {
    setTimeout(() => console.log(1), 0);
    setImmediate(() => console.log(2));
    console.log(3);
}
tests['setImmediate-2'] = test4;

function test5 () {
    setTimeout(() => {
        setTimeout(() => {
            console.log('setTimeout');
        }, 0);
    
        setImmediate(() => {
            console.log('setImmediate');
            a.then(() => console.log('promise'));
            
            process.nextTick(() => {
                console.log('nextTick 2');
            });
        });
    
        process.nextTick(() => {
            console.log('nextTick 1');
        });
    }, 0);
}
tests['nextTick'] = test5;
tests['closure'] = function () {
    var foo = 'hello';
    (function(){
        var bar = 'world';
        console.log(foo + bar);
    })();
    console.log(foo + bar);
}
tests['currying'] = function () {
    function curry(fn) {
        return function curried (...args) {
            if (args.length >= fn.length) {
                return fn(...args);
            } else {
                return function (...args2) {
                    return curried.apply(this, args.concat(args2));
                }
            }
        }
    }

    const add = curry(function (a, b, c) {
        return [a, b, c].reduce((sum, v) => sum += v, 0);
    });
    // console.log(add(1, 2, 3));
    console.log(add(1)(2)(3));
    // console.log(add(1, 2)(3));
}
tests['chain-call'] = function () {
    function Chain () {
        this.tasks = [];
    }
    Chain.prototype.next = function () {
        const task = this.tasks.shift();
        task();
    };

    Chain.prototype.eat = function () {
        this.tasks.push(() => {
            console.log('eat ->');
            this.next();
        });
        return this;
    }
    Chain.prototype.wait = function (sec) {
        this.tasks.push(() => {
            console.log(`wait ${sec}s ->`);
            setTimeout(() => {
                this.next();
            }, sec * 1000);
        });
        return this;
    }
    Chain.prototype.work = function () {
        this.tasks.push(() => {
            console.log('work');
        });
        this.next();
    }

    const chain = new Chain();
    chain.eat().wait(5).eat().wait(10).work();
    // eat -> wait 5s -> eat -> wait 10s -> work
}

/* -------------------------------------------------------------------------- */
/*                                     End                                    */
/* -------------------------------------------------------------------------- */
const runName = process.argv[2];
const runTest = tests[runName];
if (runTest) {
    console.log(`---- running: ${runName} ----`);
    runTest();
}