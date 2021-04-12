var countSubstrings = function(s) {
    const sLen = s.length;
    let sum = 0;
    for(let i=0; i<sLen; i++) {
        for(let j=i+1; j<=sLen; j++) {
            if(s.substring(i,j) === s.substring(i,j).split('').reverse().join(''))
                sum++;
        }
    }
    return sum;
};

countSubstrings("aaa");