var countBalls = function(lowLimit, highLimit) {
    let arr = [];
    let max = 0;

    for(let i = lowLimit; i <= highLimit; i++) {
        let temp = i;
        let box = 0;
        while(temp > 0){
            box += parseInt(temp %  10);
            temp = parseInt(temp/10);
        }
        arr[box] === null ? arr[box] === 0 : arr[box] ++;
        if(arr[box] > max) max = arr[box];
    };
    return max;
};

//const tmp = (i + '').split('').map(e => +e).reduce((ac, e) => ac + e, 0)