/**
 *题目描述
现有一块大奶酪，它的高度为 [公式] ，它的长度和宽度我们可以认为是无限大的，奶酪中间有许多半径相同的球形空洞。我们可以在这块奶酪中建立空间坐标系，在坐标系中， 奶酪的下表面为 [公式] ，奶酪的上表面为 [公式] 。
现在，奶酪的下表面有一只小老鼠 Jerry，它知道奶酪中所有空洞的球心所在的坐标。如果两个空洞相切或是相交，则 Jerry 可以从其中一个空洞跑到另一个空洞，特别地，如果一个空洞与下表面相切或是相交，Jerry 则可以从奶酪下表面跑进空洞；如果一个空洞与上表面相切或是相交，Jerry 则可以从空洞跑到奶酪上表面。
位于奶酪下表面的 Jerry 想知道，在 不破坏奶酪 的情况下，能否利用已有的空洞跑到奶酪的上表面去?
空间内两点 [公式] 、 [公式] 的距离公式如下：
[公式]
输入格式
每个输入文件包含多组数据。
的第一行，包含一个正整数 [公式] ，代表该输入文件中所含的数据组数。
接下来是 [公式] 组数据，每组数据的格式如下： 第一行包含三个正整数 [公式] 和 [公式] ，两个数之间以一个空格分开，分别代表奶酪中空 洞的数量，奶酪的高度和空洞的半径。
接下来的 [公式] 行，每行包含三个整数 [公式] ，两个数之间以一个空格分开，表示空 洞球心坐标为 [公式] 。
输出格式
[公式]行，分别对应[公式]组数据的答案，如果在第 [公式] 组数据中，Jerry 能从下表面跑到上表面，则输出Yes，如果不能，则输出No（均不包含引号）。
 */

function Point (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

function dist(p1, p2) {
    return Math.sqrt(
        Math.pow(p1.x - p2.x, 2) +
        Math.pow(p1.y - p2.y, 2) +
        Math.pow(p1.z - p2.z, 2)
    );
}

class DisjointSet {
    constructor() {
        this.list = new Map();
    }
    find(key) {
        let node = this.list[key];
        while (node !== this.list.get(node)) {
            node = this.list.get(node);
        }
        this.list.set(key, node);
        return node;
    }
    merge(key, target) {
        this.list.set(key, this.find(target));
    }
    add(key) {
        this.list.set(key, key);
    }
}

/**
 * @param {number} n 空洞数
 * @param {number} h 奶酪高度
 * @param {number} r 空洞半径
 * @param {Point[]} rows 行数
 * @return {boolean[]} arr 
 */
function run(n, h, r, rows) {
    const pointSet = {};
    for (let i = 0; i < rows.length; i++) {
        const point = rows[i];
    }
}
