function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

alert("숫자맞히기 게임입니다. 먼저, 컴퓨터가 1부터 100까지의 수 중, 한가지를 생각할 것 입니다.");
var r=rand(1, 100);

let answer;
for(let i=0; i<10; i--){
    answer=prompt("컴퓨터가 생각한 숫자를 맞춰보세요.");
    if(Number(answer)===r){
        break;
    }
    if(answer > r){
        alert("컴퓨터가 생각한 숫자보다 작습니다!");
    }
    if(answer < r){
        alert("컴퓨터가 생각한 숫자보다 큽니다!");
    }
};
alert("정답입니다! 다시하려면 코드를 다시 복붙해주세요.");
