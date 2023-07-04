# 함수

#### 함수는 다음 용도로 사용함
###### 코드 중복 제거 및 코드 재사용
###### 유지 보수 용이성
###### ECMAScript 사양에서 매개변수의 최대 개수에 대해 명시적으로 제한하지 않음
```ecmascript 6
// 함수 정의
function add(x,y) {
    return x+y;
}

// 함수 호출
add(2,5);

// 함수 리터럴을 변수에 할당
var add = function(x, y) {
    return x+y;
};

// Function 생성자 함수
var add = new Function('x', 'y', 'return x + y');

// 화살표 함수
var add = (x,y) => x + y;
```

#### 중첩 함수
###### 함수 내부의 지역변수처럼 함수 내부에서만 사용하는 함수
###### 일반적으로 중첩함수는 이름이 없는 이벤트 리스너에 많이 사용됨
###### 중첨 함수의 가장 큰 특징은 중첩 함수에서 중첩 함수를 포함하고 있는 함수의 지역변수에 접근해서 사용할 수 있음
```ecmascript 6
function startHello() {
    var count = 0;
    
    setInterval(function() {
        count++;
        document.write(count + "안녕하세요", "<br>");
    }, 1000)
}

startHello();

```

#### 콜백(callback)함수란?
###### 함수 내부의 처리 결과값을 함수 외부로 내보낼 때 사용함
###### 일종의 return 문과 비슷한 기능을 한다.
###### 특정 함수의 매개변수 값으로 콜백 함수를 넘긴 후 처리 결과를 콜백 함수의 매개변수에 담아 콜백 함수를 호출함
###### 로직 구현 부분은 동일하고 로직 처리 부분을 다양하게 처리해야 하는 경우 사용 가능
```ecmascript 6
//비교 분석을 위해 사칙 연산 프로그램을 가정
// 일반 풀이
function calculator1(op, num1, num2) {
    var result = '';
    
    switch(op) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        default:
            result = "지원하지 않는 사칙연산ㄴ입니다."
    }
    
    console.log("두 수의 합은" + result + "입니다");
}

//callback 함수
function calculator(op, num1, num2, callback) {
    var result = "";
    
    switch(op) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
        default :
            console.log("두 수의 합은" + result + "입니다");
    }
    
    callback(result);
}

function print1(result) {
    console.log("두 수의 합은 = " + result + "입니다");
}

function print1(result) {
    console.log("정답은 = " + result + "입니다");
}

calculator("+", 10, 20, print1);
calculator("+", 10, 20, print2);
```

#### 동기 대 비동기
###### 동기는 함수가 호출된 후 끝날때까지 다음 구문을 실행하지 않고 대기하고 있는 경우
###### 비동기는 함수가 호출된 후 끝날때까지 기다리지 않고 바로 다음 구문을 실행하는 경우
###### 콜백 함수가 주로 비동기 함수의 결과값을 처리하기 위해 사용
```ecmascript 6
// 이벤트 리스너로 사용
$("#btnStart").click(function(){
    alert("클릭되었습니다.");
});

//타이머 실행 함수로 사용
setInterval(function(){
    alert("1초마다 실행");
}, 1000);

//Ajax 결과값을 받을때 사용
$.get("http://www.webdongne.com/test.php", function(){
    alert("정상적으로 서버 통신이 이루어짐");
});
```
#### 클로저 함수
###### 클로저는 함수 내부에 만든 지역변수가 사라지지 않고 계속해서 값을 유지하고 있는 상태
###### 내부함수에서 내부함수를 포함하고 있는 외부 함수의 변수를 사용하는 구조인 경우 내부 함수를 클로저 함수라 함
```ecmascript 6
//일반 함수
function addCount(){
    var count = 0;
    count++;
    return count;
}

console.log("1.count = " + addCounter());
console.log("2.count = " + addCounter());
console.log("3.count = " + addCounter());

//결과 1, 1, 1

//클로저를 사용한 경우
function createCounter(){
    var count = 0;
    
    function addCount(){
        count++;
        return count;
    }
    return addCount;
}

var count = createCounter();

console.log("1.count = " + counter());
console.log("2.count = " + counter());
console.log("3.count = " + counter());

// 결과 1, 2, 3
```
###### 함수 내부에 데이터가 만들어지기 때문에 함수 외부에서 수정할 수 없는 보호된 데이터를 만들 수 있음 

# 스코프
###### 스코프는 식별자가 유효한 범위를 말함
###### 식별자는 어떤 값을 구별할 수 있어야 하므로 유일해야함

## 스코프의 종류
구분| 설명           |스코프|변수
----|:-------------|--------|-----
전역| 코드의 가장 바깥 영역 |전역 스코프|전역 변수
지역| 함수 본체 내부     |지역 스코프|지역 변수
###### 스코프 체인 : 스코프가 계층적으로 연결된 것을 의미(전역, 지역)
###### inner scope -> outer scope -> 전역 scope 순으로 검색하여 해당 scope에 있으면 값을 추출한다.
###### var로 선언한 변수는 전역변수가 된다.

## 변수의 생명 주기
###### 변수는 생물과 유사하게 생성되고 소멸되는 생명 주기가 있음
```ecmascript 6
//지역 변수 x는 foo함수가 호출되지 않으면 생성되지 않음
// foo 함수가 호출되지 않으면 변수 선언문이 실행되지 않기 때문
// 지역 변수의 생명 주기는 함수의 생명 주기와 같음
function foo() {
    var x = 'local';
    console.log(x);
    return x;
}

foo()
console.log(x);

```

###### 함수가 종료되면 함수가 생성한 스코프도 소멸한다. 하지만, 누군가가 스코프를 참조하고 있다면 스코프는 해제되지 않고 생존한다.
###### 해당 개념은 추후 배울 클로저에서 사용된다.
###### 전역 코드에는 반환문을 사용할 수 없어 마지막 문이 실행되어 더 이상 실행할 문이 없을 때 종료한다.

#### 전역 변수의 문제점
* 암묵적 결합
* 긴 생명 주기
* 스코프 체인 상에서 종점에 존재

#### 즉시 실행 함수
###### 함수 정의와 동시에 호출되는 즉시 실행함수는 한번만 호출되기 때문에 모든 변수는 즉시 실행 함수의 지역 변수가 된다.
```ecmascript 6
(function() {
    var foo = 10;
}());

console.log(foo);       // ReferenceError : foo is not defined
```

#### ES6 Module
###### ES6 Module을 사용하면 더는 전역 변수를 사용할 수 없음
###### ES6 Module은 파일 자체의 독자적인 Module Scope를 제공하여 Module 내에서 var 변수는 더이상 전역 변수가 아님
###### script tag에 type="module" 어트리뷰트를 추가하면 로드된 자바스크립트 파일은 Module로써 동작함 확장자는 mjs를 권장함
```ecmascript 6
<script type="module" src="live.mjs"></script>
<script type="module" src="app.mjs"></script>
```
###### ES6 module은 구형 브라우저에서 동작하지 않는다.

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

