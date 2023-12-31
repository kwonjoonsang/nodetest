# 공통
#### ES6는 하위 호환성을 유지하며 ES5의 기반위에 새로운 기능을 추가
#### Garbage Collection을 사용하여 메모리 해제를 자동으로 함(언매니지드 언어 : C, 매니지드 언어 : java, javascript)
#### 세미콜론 자동 삽입 기능(ASI : automatic semicolon insertion)이 자동으로 삽입되어지기 때문에 세미콜론은 생략 가능


# 변수
####  변수 선언
###### 변수 명은 문자, 숫자, _ , $ 사용가능함. 대소문자를 구별함
###### 숫자로 시작은 불가함
###### naming convention : 가독성 좋게 만드는 명명 규칙 (ex firstName, first_name, FirstName)
```ecmascript 6
var score; (ES6 이전 버전)
let score; (ES6 버전)
const foo = 10; (ES6 버전. 상수로써 값을 재할당할 수 없음)
```

####  값의 할당
###### 변수에 값을 할때는 할당 연산자 = 을 사용함
###### 변수 선언은 runtime 이전 평가과정에서 실행되고 값할당은 runtime에 실행됨
###### var 변수 선언은 선언과 초기화가 동시에 이루어짐(undefined)
```ecmascript 6
console.log(score);
var score = 80; (값 할당)
console.log(score);
score = 90; (값의 재할당)
```
#### 변수 호이스팅
###### 변수 선언이 소스코드가 한줄씩 순차적으로 실행되는 시점 즉 runtime이 아니라 이전 단계에서 실행되기 때문에 오류가 발생되지 않음
```ecmascript 6
console.log(score);
var score;
```
###### 자바스크립트 엔진은 변수 선언을 포함한 모든 선언문(변수, 함수 등)을 찾아내 먼저 실행함(평가 과정)
###### 평가과정이 끝나면 선언문을 제외한 모든 소스코드를 한 줄씩 순차적으로 실행
###### 변수 선언이 소스코드의 어디에 위치하든 상관없이 다른 코드 보다 먼저 실행됨
###### 변수 뿐아니라 모든 식별자는 호이스팅됨(var, let, const, function, class 등)

#### 값
###### 값은 식이 평가되어 생성된 결과
```ecmascript 6
10 + 20;
```

#### 리터럴
###### 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법
###### 자바스크립트 엔진은 코드가 실행되는 시점인 runtime에 리터럴을 평가해 값을 생성함
###### 리터럴은 사람이 이해할 수 있는 문자(숫자, 알파벳 한글 등) 또는 약속된 기호('' "" [] {} 등)

#### 표현식(expression)
###### 값으로 평가될 수 있는 문

#### 문(statement)
###### 프로그램을 구성하는 기본 단위이지 최소 실행 단위
###### 토큰이란 문법적인 의미를 가지며 문법적으로 더 이상 나눌수 없는 코드의 기본요소
```ecmascript 6
var sum = 1 + 2;

전체는 문
각 요소(var, sum, 1, +, 2, ;) 각각은 토큰이라고 함
```

#### Data Type
###### 숫자 타입 : 정수와 실수를 구분하지 않음
###### 문자열
###### Boolean Type : True, False
###### Undefined : var로 선언된 변수에 암묵적으로 할당되는 값
###### null : 값이 없음
###### symbol : ES6에 추가된 type
###### Object : 객체, 함수, 배열

#### 숫자 타입
###### 64 Bit 부동소수점 형식을 따른다.
###### 정수만을 표현하기 위한 Data Type은 별도로 존재하지 않음
```ecmascript 6
var integer = 10;           //정수
var double = 10.12;         //실수
var negative = -20;         //음의 정수
var binary = 0b01000001;    //2진수
var octal = 0o101;          //8진수
var hex = 0x41;             //16진수
console.log(1 === 1.0);     //true
console.log(3 / 2);         //1.5
```

###### 숫자 타입은 다음 특별한 값 표현 가능
###### Infinity : 양의 무한대
###### -Infinity : 음의 무한대
###### NaN : 산술 연산 불가(자바스크립트는 대소문자를 구문하기 때문에 NaN을 제외한 값은 모두 오류 발생)
```ecmascript 6
console.log(10 / 0);        //Infinity
console.log(10 / -0);       //-Infinity
console.log(1 * 'String');  //Nan
```

#### 문자 타입
###### 문자열은 작은 따움표, 큰타움표, 백틱으로 텍스트를 정함
###### C는 문자열 타입을 제공하지 않고 문자의 배열로 문자열을 표현하고 자바는 문자열을 객체로 표현
###### 자바스크립트의 문자열은 원시 타입이며 변경 불가능한 값임 이것은 문자열이 생성되면 변경할 수 없음을 의미함
```ecmascript 6
var str;
str = '문자열';     //작은 따움표
str = "문자열";    //큰 따움표
str = `문자열`;    //백틱(ES6)
str = '작은 따움표로 감싼 문자열 내의 "큰 따움표"는 문자열로 인식된다';
str = "큰 따움표로 감싼 문자열 내의 '작은따움표'는 문자열로 인식된다";
```

#### 템플릿 리터럴
###### Multi Line String, 표현식 삽입, Tagged template 등 편리한 문자열 처리 기능 제공
###### 템플릿 리터럴은 런타임에 일반 문자열로 변환
###### 작은 따움표, 큰따움표 대신 백틱(`)을 사용함
###### 일반 문자열 내에서 줄바꿈 등의 공백을 표현하려면 백슬래시로 시작하는 이스케이프 시퀀스를 사용해야함
이스케이프 시퀀스|의미
:-------:|:------------------------------------------
\0|Null
\b|백스페이스
\f|Form Feed : 프린터로 출력할 경우  다음 페이지의 시작 지점으로 이동
\n|개행(LR) : 다음행으로 이동
\r|개행(CR) : 커서를 처음으로 이동
\t|Tab수평
\v|Tab수직
\uXXXX|Unicode
\'| 작은 따움표
\"| 큰 따움표
\\|백슬레시

```ecmascript 6
var template = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;

console.log(template);
```

###### 문자열의 경우 문자열 연산자 +를 사용해 연결할 수 있음
###### 표현식을 삽입하려면 ${}으로 표현식을 감싼다. 이때 값은 문자열로 강제로 변환되어 삽입된다.
```ecmascript 6
// ES5 : 문자열 연결
var first = 'first-test';
var second = 'second-test';

console.log('My name is ' + first + ' ' + second);

// ES6 : 표현식 삽입
console.log(`My name is ${first} ${second}`);
```

#### Boolean
###### true, false로만 구성되어 있음

#### undefined
###### var로 선언한 변수는 암묵적으로 undefined로 초기화됨
###### 변수 선언에 의해 메모리 할당이 이루어질때까지 빈 상태로 내벼러 두지 않고 undefiend로 초기화한다.
###### 개발자가 의도적으로 할당하기 위한 값이 아닌 자바 스크립트 엔진이 변수를 초기화 할 때 사용하는 값
###### undefined가 반환되면 참조한 변수가 선언 이후 값이 할당한 적이 없는 초기화되지 않는 변수임
###### javascript 엔진에서 변수를 초기화할때 사용하는 undefined를 개발자가 할당하는 것을 권장하지 않는다.
###### 개발자가 명시하고 싶을때는 null을 할당한다.

#### null 타입
###### 대소문자를 구분하므로 null로만 사용가능
###### 변수에 null을 할당하는 것은 참조를 명시적으로 제거하는 것을 의미

#### Symbol Type
###### ES6에서 추가된 7번째 타입으로 변경 불가능한 원시타입 값

#### Object Type
###### Javascript는 Object 기반의 언어이며 Javascript를 이루는 거의 모든 것이 Object
###### 지금까지 알아본 모든 Datay Type 이외의 값은 모두 Object임

#### 동적 타이핑
###### C나 Java 같은 Static Type 언어는 변수를 선언할때 Data Type이 미리 선언해야함
###### Static Type 언어는 Compile 시점에 Type Check를 수행하며 해당 부분에 에러를 발생함
###### Javascript는 변수를 선언할 때 Type을 선언하지 않는다. 할당은 자유롭게 한다.
###### Javascript는 값을 할당하는 시점에 변수의 타입이 동적으로 결정됨. Javascript의 변수는 선언이 아닌 할당에 의해 Type이 결정
###### 재할당에 의해 변수의 Type은 언제든지 동적으로 변할 수 있음 이러한 특징을 동적 타이핑이라함
```ecmascript 6
// typeof를 사용하여 Data Type을 확인할 수 있음
var foo = 1;
console.log(typeof foo);
```

#### 원시 값과 객체의 비교
###### 원시 값은 변경 불가능한 값, 객체 타입의 값은 변경 가능한 값임
###### 원시 값을 변수에 할당하면 변수에는 실제 값이 저장, 객체를 변수에 할당하면 변수에 참조 값이 저장됨
###### 원시 값을 갖는 변수를 다른 변수에 할당하면 값이 복사하여 전달, 객체를 변수에 할당하면 참조 값이 저장
##### 원시 값을 변경하면 새로운 메모리에 할당하여 변수가 참조하던 메모리 공간 주소를 바꾼다.
# 조건문 반복문
#### 조건문(if, else)
```ecmascript 6
if(조건식1)
{
    
}
else if(조건식2)
{
    
}
else
{
    
}

//삼항 조건 연산자
var result = x%2 ? '홀수' : '짝수';
```

#### 조건문(switch)
```ecmascript 6
switch(표현식)
{
    case 표현식1:
        break;
    case 표현식2:
        break;
    default:
        
}
```

#### 반복문(for)
```ecmascript 6
for (var i = 0; i < 2; i++)
{
    console.log(i);
}
```

#### 반복문(while)
```ecmascript 6
var count = 9;

while (count < 3)
{
    console.log(count);
    count++;
}

//무한루프
while(true) { }
```

#### 반복문(do ~ while)
```ecmascript 6
var count = 0;

do {
    console.log(count);
    count++;
} while(count < 3);
```

#### 반복 탈출(break)
#### 반복 탈출(continue)

# 형변환
#### 타입 변환
###### 타입 변환이 기존 원시 값을 직접 변경하는 것은 아님(원시 값은 변경 불가능한 값)
###### 타입 변환은 기존 원시 값을 사용해 다른 타입의 새로운 원시 값을 생성하는 것
###### 명시적 타입 변환이 좋은것은 아니며 암묵적 타입 변환이 더욱 간결할 수 있음(중요한 것은 코드를 예측 가능해야함)
```ecmascript 6
//명시적
(10).toString()

//암묵적
10 + ''
```

#### 명시적 타입 변환 or type casting
###### 변환 방법 : 표준 빌트인 생성자 함수를 new 연산자 없이 호출, 빌트인 메서드 사용, 암묵적 타입 변환
###### 문자열 타입으로 변환
```ecmascript 6
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 -> 문자열 타입
String(1);          // -> "1"
String(NaN);        // -> "NaN"
String(Infinity);   // -> "Infinity"
// Boolean -> 문자열 타입
String(true);       // -> "true"
String(false);      // -> "false"

// 2. Object.prototype.toString 메서드를 사용하는 방법
// 숫자 -> 문자열
(1).toString();         // -> "1"
(NaN).toString();       // -> "NaN"
(Infinity).toString();      // -> "Infinity"
// Boolean -> 문자열
(true).toString();          // -> "true"
(false).toString();         // -> "false"

// 3.문자열 연결 연산자를 이용하는 방법
// 숫자 -> 문자열
1 + '';         // -> "1"
NaN + '';       // -> "NaN"
Infinity + '';  // -> "Infinity"
// Boolean -> 문자열
true + '';      // -> "true"
false + '';     // -> "false"
```
###### 숫자 타입으로 변환
```ecmascript 6
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
Number('0');            // -> 0
Number('13.53');        // -> 13.53
Number(true);           // -> 1
Number(false);          // -> 0

// 2. parseInt, parseFloat 함수를 사용하는 방법
parseInt('0');          // -> 0
parseFloat('10.53');    // -> 10.53

// 3. + 단항 산술 연산자르 ㄹ이용하는 방법
+'0';                   // -> 0
+'10.53';                // -> 10.53
+true;                  // -> 1
+false;                 // -> 0

// 4. * 산술 연산자를 이용하는 방법
'0' * 1;        // -> 0
'10.53' * 1;    // -> 10.53
true * 1;       // -> 1
false * 1;      // -> 0
```
###### Boolean 타입으로 변환
```ecmascript 6
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
Boolean('x');       // -> true
Boolean('');        // -> false
Boolean('false');   // -> true
Boolean(0);         // -> false
Boolean(1);         // -> true
Boolean(NaN);       // -> false
Boolean(Infinity);  // -> true
Boolean(null);      // -> false
Boolean(undefined); // -> false
Boolean({});        // -> true
Boolean([]);        // -> true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
!!'x';          // -> true
!!'';           // -> false
!!'false';      // -> true
!!0;            // -> false
!!1;            // -> true
!!NaN;          // -> false
!!Infinity;     // -> true
!!null;         // -> false
!!undefined;        // -> false
!!{};           // -> true
!![];           // -> true
```
#### 암묵적 타입 변환 or type 강제 변환
###### 문자열
###### +로 문자열 타입과 숫자 타입을 연결하면 문자열로 암묵적으로 변환되어짐
```ecmascript 6
// 숫자 타입
0 + ''          // "0"
-0 + ''         // "0"
Nan + ''        // "Nan"
Infinity + ''   // "Infinity"

// 불리언 타입
true + ''       // "true"
false + ''      // "false"

// null 타입
null + ''       // "null"

// undefined 타입
undefined + ''  // "undefined"

// symbol 타입
(Symbol()) + '' // Type Error

// 객체 타입
({}) + ''       // "[Object Object]"
Math + ''           // "[Object Math]"
[] + ''             // ""
[10, 20] + ''       // "10,20"
(function(){}) + '' //"function(){}"
Array + ''          //"function Array() { [native code] }"
```
###### 숫자 타입
###### 산술 연산자의 모든 피연산자는 모두 숫자 타입이어야함
###### 자바스크립트는 숫자 타입은 자동으로 숫자로 변경하여 연산함
###### 숫자로 변경이 불가능한 경우 결과는 NaN이 된다.

###### Boolean 타입
###### 자바스크립트는 조건식의 평가 결과를 Boolean 타입으로 암묵적 타입 변환을 한다.
```ecmascript 6
if ('') console.log('1');
if (true) console.log('2');
if (0) console.log('3');
if ('str') console.log('4');
if (null) console.log('5');

// 2,4
```
###### falsy 값
###### false, undefined, null, 0, -0, Nan, ''
###### falsy 값을 제외한 값은 다 true로 평가중

## let, const, Block Level Scope
## var 키워드 변수의 문제점
###### ES5까지 변수를 선언할 수 있는 유일한 방법은 var키워드를 사용함. 해당 키워드 사용 시 아래와 같은 특징이 있음
#### 변수 중복 선언 허용
###### var 키워드로 선언한 변수는 중복 선언이 가능함
```ecmascript 6
var x = 1;
var y = 2;

var x = 3;
var y;

// 재선언 및 값 할당이 된 변수는 해당 값으로 갱신되며 값 할당 없이 선언만 된 변수는 무시되어 기존 값을 사용한다.
console.log(x);         //3
console.log(y);         //2

```

#### 함수 레벨 스코프
###### var 키워드로 선언한 변수는 함수 코드 블록 만을 지역 스코프로 인정하고 나머지는 모두 전역 변수가 된다.
###### for문에서 var로 선언된 변수는 전역 변수가 된다
```ecmascript 6
var x = 1;

if(true) {
    var x = 10;
}

console.log(x);             //10
```

#### 변수 호이스팅
###### var 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수는 선두에서 선언된 거처럼 동작한다. 값이 할당되기 전에는 해당 변수 값은 undefined이다
###### 변수 선언문 이전에 변수 참조하는 것은 변수 호이스팅에 의해 에러는 발생하지 않지만 가독성을 해친다.
```ecmascript 6
console.log(foo);           //undefined

foo = 123;

console.log(foo);           //123
```

## let
###### var 키워드 단점을 보완하기 위해 ES6부터 새로운 변수 키워드 let, const를 도입했다.

#### 변수 중복 선언 금지
###### let의 경우 변수 중복 선언 시 에러를 발생한다.
```ecmascript 6
//var의 경우 아래 구문이 중복으로 선언이 가능해 오류 발생하지 않는다.
var foo = 123;
var foo = 456;

//let의 경우 아래 구문에서 Syntax오류가 발생한다.
let bar = 123;
let bar = 456;
```

#### 블록 레벨 스코프
###### let 키워드로 선언한 변수는 모든 코드 블록을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.
```ecmascript 6
let foo = 1;            // 전역 변수

{
    let foo = 2;        // 지역 변수
    let bar = 3;        // 지역 변수
}

console.log(foo);       // 1
console.log(bar);       // referenceerror : bar is not defined
```
#### 변수 호이스팅
###### let으로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
###### var로 선언한 변수는 런타임 이전에 암묵적으로 선언, 초기화 단계가 한번에 진행됨
###### 즉 선언 단계에서 변수 식별자를 등록해 변수 존재를 알리고 즉시 초기화 단계에서 undefined로 초기화한다.
###### let으로 선언한 변수는 선언과 초기화 단계가 분리되어 진행한다. 런타임 이전에 암묵적으로 선언단계가 실행되지만 초기화 단계는 선언문에 도달했을때 실행됨
###### 만약 초기화 이전에 변수에 접근하면 참조 에러(ReferenceError)가 발생한다.
###### 스코프의 시작 지점에서 초기화 시작지점까지 변수를 참조 못하는 구간을 일시적 사각지대라고 함
###### 자바스크립트는 Es6에서 도입된 let, const를 포함한 모든 선언(var, let, const, function, class등)을 호이스팅 한다.
###### 단 ES6에 도입된 let, const, class를 사용한 선언문은 호이스팅이 발생하지 않는거처럼 동작한다.
```ecmascript 6
console.log(foo);       //ReferenceError: foo is not defined
let foo;
```

#### 전역 객체와 let
###### var 키워드로 선언한 전역 변수와 함수 그리고 선언하지 않은 변수에 값을 할당한 암묵적 전역은 전역 객체 window의 프로퍼티가 됨
###### 전역 객체의 프로퍼티 참조 시 window를 생략할 수 있음
###### let으로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다. 즉 window.foo와 같이 호출이 불가능함
```ecmascript 6
// 전역 변수
var x = 1;
// 암묵적 전역 변수
y = 2;
// 전역 함수
function foo() {}

// var키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티임
console.log(window.x);      //1
console.log(x);             //1

console.log(window.y);      //2
console.log(y);             //2

console.log(window.foo);    // foo() {}
console.log(foo);           // 위동
```

## const 키워드
#### 선언과 초기화
###### const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야함
###### Block Level Scope
```ecmascript 6
consot foo = 1;

consot foo;     //SyntaxError : Missing initializer in const declaration

{
    // 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
    console.log(foo);       //Reference Error : Cannot access 'foo' before initialization
    const foo = 1;
    console.log(foo);   // 1
}

console.log(foo);       // Reference Error : foo is not defined
```

#### 재할당 금지
###### var or let 키워드로 선언한 변수는 재할당이 자유로우나 const 키워드로 선언한 변수는 재할당이 금지된다.
###### 값이 변하지 않기 때문에 const는 상수로 사용된다.
```ecmascript 6
const foo = 1;
foo = 2;        // TypeError: Assignment to constant variable
```

###### const 키워드로 선언된 변수에 객체를 할당한 경우 값을 수정할 수 있다.
```ecmascript 6
const person = {
    name: 'Lee';
};

person.name = 'Kim';

console.log(person);    // {name: "Kim"}
```

#### 변수 할당 관련
###### ES6를 사용하는 경우 var를 사용하지 않는다.
