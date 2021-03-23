function solution(n) {
    let arr = [];
    
    for(let i=0; i<=n; i++) {
        arr.push(true);
    }
    
    for(let i=2; i<=n; i++) {
        for(let j=i*i; j<=n; j+=i) {
            if(arr[j]) arr[j] = false;
        }
    }
    // 0과 1제거
    return arr.filter(ele => ele === true).length - 2;
}