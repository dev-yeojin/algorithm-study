var dailyTemperatures = function(T) {
    const days = T.length;
    let stack = [];
    let result = new Array(days).fill(0);
    for(let i=0; i<days; i++) {
        while(stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
            let idx = stack.pop();
            result[idx] = i-idx;
        }
        stack.push(i);
    }
    return result;
   
};