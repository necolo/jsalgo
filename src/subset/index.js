function subset (nums) {
    return nums.reduce((res, num) => res.concat(res.map((r) => r.concat(num))), [[]]);
}
module.exports = subset;
