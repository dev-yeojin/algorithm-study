function solution(N, stages) {
    let arr = [];
    for(let idx=1; idx<=N; idx++) {
        let failCnt = stages.filter(stage => stage === idx).length;
        let arriveCnt = stages.filter(stage => stage >= idx).length;
        arr.push({
            idx,
            failRatio: failCnt === 0 ? 0 : failCnt/arriveCnt
        });
    }
    arr.sort((a,b) => {
        if(a.failRatio > b.failRatio) return -1;
        if(a.failRatio < b.failRatio) return 1;
        if(a.failRatio === b.failRatio) {
            if(a.idx > b.idx) return 1;
            if(a.idx < b.idx) return -1;
        }
    });
    return arr.map(item => item.idx);
}

solution(5, [2,1,2,6,2,4,3,3]);