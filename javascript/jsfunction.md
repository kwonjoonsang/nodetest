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


