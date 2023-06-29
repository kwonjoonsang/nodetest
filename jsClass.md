# 객체
## 객체란?
#### Javascript는 객체 기반의 프로그래밍 언어임
#### 원시 값을 제외한 나머지 값(함수, 배열, 정규 표현식 등)은 모두 객체임
#### 객체는 프로퍼티의 집합이며 프로퍼티는 키와 값으로 구성됨

* 원시 타입 : 단 하나의 값, 변경 불가능한 값
* 객체 : 다양한 타입의 값을 하하나의 단위로 구성한 복합적인 자료구조, 변경 가능한 값
  * 객체는 0개 이상의 프로퍼로 구성되어 있음
  * 프로퍼티는 Key와 Value로 구성됨
```ecmascript 6
// 프로퍼티는 ,(콤마)로 구분한다.
var Person = {
    name: 'Lee',
    age: 20
};
```
#### Javascript의 모든 값은 프로퍼티가 될 수 있음
#### 프로퍼티 값이 함수일 경우 일부 함수와 구분하기 위해 Method라고 부른다.
```ecmascript 6
var count = {
    num = 0,
    increase: function() {
        this.num++;
    }
};
```
#### 프로퍼티 : 객체의 상태를 나타내는 값
#### 메서드 : 프로퍼티를 참조하고 조작할 수 있는 동작

## 객체 생성
#### 객체 생성 방법
* 객체 리터럴
  * 객체 리터럴의 중괄호는 코드 블록을 의미하지 않는다.
  * 코드 불록의 닫는 중괄호에는 콜론을 붙이지 않는다.
  * 객체 리터럴의 경우 객체를 생성하기 위해 클래스 정의 -> new 연산자로 Instance 화 시켜야함
  * 객체 생성 시 동시에 프로퍼티를 만들 수 있고 프로퍼티를 동적으로 추가할 수도 있다.
* Object 생성자 함수
* 생성자 함수
* Object.create 메서드
* Class(ES6)

```ecmascript 6
var person = {
    name: 'Lee',
    sayHello: function () {
        console.log(`Hello! My name is $\this.name}.');
    }
};

console.log(typeof person);
console.log(person);
```

```ecmascript 6
// 프로퍼티 키 동적 생성
var obj = {};
var key = 'hello';

obj[key] = 'world';
// var obj = { [key]: 'world' };

// 프로퍼티 키를 중복 선언하면 나중 값으로 덮어 쓴다.
// name 값은 refresh
var foo = {
    name: 'test',
    name: 'refresh'
};

```

