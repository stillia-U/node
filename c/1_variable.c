#include <stdio.h>

int main(void){
    
    //정수형 변수
    
    int integer; //변수 선언
    integer = 10; //변수 대입
    printf("%d\n", integer); //변수 출력 %d


    //실수형 변수 (float)
    
    
    float float_variable; //변수 선언
    float_variable = 160.52; //변수 대입 (6 자리 까지)
    printf("%f\n", float_variable); //변수 출력 %f
    printf("%.2f\n", float_variable); //%뒤에 마침표를 찍고 출력할 자릿수를 정할 수 있다.

    
    //실수형 변수 (double)
    

    double double_variable; //변수 선언
    double_variable = 3.14159265358979; //변수 대입 (15글자 까지)
    printf("%lf\n", double_variable); //변수 출력 %lf
    printf("%.5lf\n", double_variable); //자릿수 지정 출력


    //상수형 변수

    const int const_integer = 10; //정수형 상수 선언 & 대입
    const float const_float = 3.14; //실수형 상수(float) 선언 & 대입
    const double const_double = 3.141592; //실수형 상수(double) 선언 & 대입
    printf("%d\n", const_integer); //정수형 상수 출력
    printf("%.1f\n", const_float); //실수형 상수 (float) 출력
    printf("%.2lf\n", const_double); //실수형 상수 (double) 출력


    //산술 연산자


    const int add = 1 + 1; //덧셈 (2)
    const int sub = 2 - 1; //뺄셈 (1)
    const int mul = 2 * 2; //곱셈 (4)
    const int div = 5 / 2; //나눗셈 (2)
    const int rem = 5 % 2; //나눗셈의 나머지 (1)
    printf("%d\n", add);
    printf("%d\n", sub);
    printf("%d\n", mul);
    printf("%d\n", div);
    printf("%d\n", rem);


    //scanf
    int example1;
    printf("값을 입력하라:");
    scanf("%d", &example1);
    printf("%d\n", example1);



    return 0;
}
