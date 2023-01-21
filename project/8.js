function computer(type, once, twice){
    switch(type){
        case "add":
            return once + twice;
            break;
        case "sub":
            return once - twice;
            break;
        case "mul":
            return once * twice;
            break;
        case "div":
            return once / twice;
            break;
    }
}
alert("javascript 사칙연산 계산기입니다.");
let information=prompt("먼저, 어떤 연산을 할 것인지 입력해주세요. (덧셈, 뺄셈, 곱셈, 나눗셈으로 작성해주세요.)");
let type;
let sign;
let bk=0;
switch(information){
    case "덧셈":
        type="add";
        alert("이제 첫번째 더할 값과 두번째 더할 값을 각각 정합니다.");
        sign="+";
        break;
    case "뺄셈":
        type="sub";
        alert("이제 첫번째 뺄 값과 두번째 뺄 값을 각각 정합니다.");
        sign="-";
        break;
    case "곱셈":
        type="mul";
        alert("이제 첫번째 곱할 값과 두번째 곱할 값을 각각 정합니다.");
        sign="×";
        break;
    case "나눗셈":
        type="div";
        alert("이제 나누어지는 수와 나누는 수를 각각 정합니다.");
        sign="÷";
        break;
    default:
        alert("값을 제대로 입력해주세요. 다시하려면 코드를 다시 복붙해주세요.");
        bk=1;
}
if(bk!=1){
    let once=prompt("첫번째 값은 무엇인가요?");
    let twice=prompt("두번째 값은 무엇인가요?");

    alert(`${once}${sign}${twice}=`+computer(type, Number(once), Number(twice)));
}
