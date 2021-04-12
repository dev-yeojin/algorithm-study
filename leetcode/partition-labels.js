var partitionLabels = function(S) {
    const len = S.length;
    let map = new Map();
    
    // let arr = S.split('');
    // let reverseArr = S.split('').reverse();
    // for(let i=0; i<len; i++) {
    //     map.set(len - reverseArr.findIndex(S[i]) + 1);
    // }

    let result = [];
    for(let i=0; i<len; i++) {
        //console.log(" ", S[i], i);
        map.set(S[i], i);
    }
    let start = 0, end = 0;
    for(let i=0; i<len; i++) {
        end = Math.max(end, map.get(S[i]));
        if(i === end) {
            result.push(end - start + 1);
            start = end + 1;
        }
    }
    return result;
};