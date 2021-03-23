function solution(nums) {
    let answer = 0;
    const numsLen = nums.length;
    for(let i=0; i<numsLen-2; i++) {
        for(let j=i+1; j<numsLen-1; j++) {
            for(let k=j+1; k<numsLen; k++) {
                if(isPrimeNumber(nums[i]+nums[j]+nums[k])) answer ++;
            }
        }
    }
    return answer;
}
const isPrimeNumber = (number) => {
    for(let i=2; i<=Math.sqrt(number); i++) {
        if(number%i===0)
            return false;
    }
    return true;
}
/*
const isPrimeNumber = (number) => {
    const arr = [];
    for(let i=0; i<=1000; i++) {
        arr[i] = true;
    }
    arr[0] = false;
    arr[1] = false;
    for(let i=2; i<=1000; i++) {
        for(let j=i*i; j<=1000; j+=i) {
            if(arr[j]) arr[j] = false;
        }
    }
    return arr[number];
} 
 */