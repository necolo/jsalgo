const tape = require('tape');
const Semaphore = require('./');

async function sleep (ticks) {
    for (let i = 0; i < ticks; ++i) {
        await Promise.resolve();
    }
}

const sleepRand = () => sleep(Math.random() * 100);

tape('semaphore - mutex behavior', async (t) => {
    const semaphore = new Semaphore();
    let counter = 0;
    let mutex = false;

    async function thread () {
        for (let i = 0; i < 10; ++i) {
            await sleepRand();
            await semaphore.p();
            t.notOk(mutex, 'mutex ok');
            mutex = true;
            counter += 1;
            await sleepRand();
            mutex = false;
            semaphore.v();
        }
    }

    const threads = [];
    for (let i = 0; i < 500; ++i) {
        threads.push(thread());
    }
    await Promise.all(threads);

    t.equals(counter, 5000, 'counter ok');

    t.end();
});

tape('semaphore - gate', async (t) => {
    const semaphore = new Semaphore(0);
    let started = 0;
    let finished = 0;

    async function thread () {
        started += 1;
        await semaphore.p(5);
        finished += 1;
    }

    const threads = [];
    for (let i = 0; i < 500; ++i) {
        threads.push(thread());
    }

    await sleepRand();
    t.equals(started, 500, 'started 500 threads');
    t.equals(finished, 0, 'initial counter 0');

    semaphore.v(10);
    await sleep(1000);
    t.equals(finished, 2, '2 threads through gate');

    for (let i = 0; i < 5; ++i) {
        semaphore.v(5);
    }
    await sleep(1000);
    t.equals(finished, 7, '7 threads released');

    for (let i = 0; i < 4; ++i) {
        semaphore.v(1);
    }
    await sleep(1000);
    t.equals(finished, 7, 'no more threads released');

    semaphore.v(1);
    await sleep(1000);
    t.equals(finished, 8, 'last thread released');

    for (let i = 0; i < 50; ++i) {
        semaphore.v(2);
    }
    await sleep(1000);
    t.equals(finished, 28, '20 threads released');

    t.end();
});