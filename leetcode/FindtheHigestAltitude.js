/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0;
    let sum = 0;
    gain.forEach(item => {
        sum += item;
        max = Math.max(max, sum);
    })
    return max;
};

console.log(largestAltitude([-5,1,5,0,-7]));
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]));