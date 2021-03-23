const { parse } = require("path");

function test(road) {
    // a[0] + a[1];
    let arr = [];
    let cnt = road.length;
    let temp = road.split('');
    arr[0] = 0;
    arr[1] = parseInt(temp[1]);
    if(temp[2] === "0") {
        arr[2] = 0;
    } else {
        arr[2] = Number(arr[1] + 1);
    }
    let idx = 3;
    while(idx <= cnt) {
        if(arr[idx] === "0") {
            arr[idx] = 0;
        } else {
            arr[idx] = arr[idx - 1] + arr[idx - 2];
            // console.log("idx", idx);
            // console.log("1", arr[idx - 1]);
            // console.log("0", arr[idx - 2]);
        }
        idx ++;
    }
    console.log(arr[cnt-1]);
    return arr[cnt];
}


var inputStr = "1101";
test(inputStr);