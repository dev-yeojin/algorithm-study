// 위클리 챌린지 1주차
function solution(price, money, count) {
    const sum = (count * (2 * price + (count - 1) * price)) / 2;
    return money > sum ? 0 : sum - money;
}