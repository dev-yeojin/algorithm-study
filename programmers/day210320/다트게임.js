function solution(dartResult) {
    const games = dartResult.match(/(\d{1,2})([SDT])([*#])?/g);
    const scoreReg = /\d{1,2}/;
    const bonusReg = /[SDT]/;
    const optionReg = /[#*]/;
    const bonusMap = {
        S: 1,
        D: 2,
        T: 3,
      };
    let gameScore = [0,0,0];

    games.forEach((game, idx) => {
        let score = game.match(scoreReg);
        let bonus = game.match(bonusReg);
        let option =  game.match(optionReg);
        let sum = Math.pow(score[0], bonusMap[bonus[0]]);
        if(option) {
            if(option[0] === "#") {
                sum *= -1;
            } else if(option[0] === "*") {
                sum *= 2;
                if(idx !== 0) {
                    let prevScore = gameScore[idx-1];
                    gameScore[idx-1] = prevScore*2;
                }
            }
        }
        gameScore[idx] = sum;
    });
    return gameScore.reduce((a,b) => a+b);
}

let input1 = "1S2D*3T";
console.log(solution(input1));