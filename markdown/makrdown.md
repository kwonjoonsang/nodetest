# markdown language

## header text
#### #으로 시작하는 텍스트
#### #이 늘어날때마다 글자 크기가 작아짐

## Horizontal Rule(수평선)
#### - or * or _ 을 3개 이상 작성
#### 단, -를 사용하는 경우 header로 인식할 수 있으니 전 라인을 비워야함
***
___

---

## Line Breaks(줄바꿈)
#### br을 사용하여 줄바꿈을 할 수 있음(하나의 문장에서 줄바꿈)
#### 엔터로 칸을 띄면 다음 행으로 넘어감

Oh my my my my
you got me high so fast <br>
test test test test
123 123 123 123 <br>

#### italic : * or _로 감싼 text
_italic_
#### bold : ** or __로 감싼 text
**bold** <br>
__bold__
#### 취소선 : ~~로 감싼 text
~~cancle~~ <br>
_You **can** ~~combine~~ them_

## Blockquotes (인용)
#### > 로 시작하는 text
#### >는 3개까지 가능
As Grace Hopper said:
> I've always been more interested in the future 
> first line
> > second line
> > > third line

#### Blockquotes안에는 제목 리스트 텍스트박스도 넣을수 있음
#### * 하나는 list
#### # 하나는 제목
#### 인용 구분자는 텍스트박스

> # this is h1!
>  * list <br>
> `textbox`

## List
#### Unordered list는 *, +, - 를 사용하여 순서가 없는 목록을 만들 수 있음
#### 들여 쓰기를 하면 모양이 바뀝니다.

* 첫번째 라인
  * 두번째 라인
    * 세번째 라인

+ 첫번째 라인
  + 두번째 라인
    + 세번째 라인

- 첫번째 라인
- 첫번째 라인
- 첫번째 라인

#### Ordered list는 숫자를 기입하면 순서 있는 목록이 됨
#### 들여쓰기를 하면 모양이 바뀜

1. 첫번째 라인
2. 두번째 라인
3. 세번째 라인

#### 리스트 안 리스트를 사용하려면 tab과 함께 숫자 1부터 나열해야함
1. 리스트 1번
   1. 리스트 1-1번
2. 리스트 2번
   1. 리스트 2-1번
   2. 리스트 2-2번
   3. 리스트 2-3번

#### 혼합 리스트
1. 리스트 1번
    * 리스트 항목
2. 리스트 2번
    * 리스트 항목 1
    * 리스트 항목 2

## Backslash Escapes
#### 특수 문자를 표현할때 문자 앞에 \를 넣고 특수문자를 쓰면 됨

* 특수 문자가 출력안됨<br>
\& 특수 문자가 출력됨

## Image 처리
#### 링크와 비슷하지만 앞에 !가 붙음
#### 인라인 이미지 ![alt text](/test.png)
#### 링크 이미지 ![alt text](image_URL)
!['what see'](https://item.kakaocdn.net/do/401897ae7515bd9923e9865ac3721af0b3a18fdf58bc66ec3f4b6084b7d0b570 "whatsee")
#### 이미지의 사이즈를 변경할때 <img width="000px" height="000px></img>와 같이 표현
#### 이미지 파일에 마우스를 올렸을때 커서 옆에 나오는 텍스트 설정
#### 이미지 링크 거는 방법
[!['what see'](https://item.kakaocdn.net/do/401897ae7515bd9923e9865ac3721af0b3a18fdf58bc66ec3f4b6084b7d0b570 "alt image")](https://nexon.com)

#### a 태그를 사용하여 이미지 링크 거는 법
#### Image Size 변경하는 법
<a href="#">
    <img src="https://item.kakaocdn.net/do/401897ae7515bd9923e9865ac3721af0b3a18fdf58bc66ec3f4b6084b7d0b570" width="400px" height="200px" alt="sample image">
</a>

## 외부 링크

#### \[보여지는내용](이동할 주소)

[Google](https://www.google.com "구글")

#### \[보여지는내용](#이동할 제목)
#### 괄호 안의 이동할 링크를 쓸때는 띄어쓰기는 -로 연결 영어는 모두 소문자로 작성
[1. Headers 헤더](#1-headers-헤더)

## 코드 블럭

#### 간단한 인라인 코드는 텍스트를 앞뒤로 ` 기호로 감싸면 됩니다.
``` javascript
function test()
{
    console.log("test");
}
```

## 체크 리스트

#### 줄앞에 - [x]를 써서 완료한 리스트 표시
#### 줄앞에 - []를 써서 미완료된 리스트 표시
- [x] this is check<br>
- [ ] this is not check

## Table

#### 헤더와 셀을 구분할 때 3개이상의 -(hyphen/dash) 기호가 필요합니다.
#### 헤더 셀을 구분하면서 :(Colons) 기호로 셀 안에 내용을 정렬할 수 있음
#### 가장 좌측과 가장 우측에 있는 |(Vertical Bar) 기호는 생략 가능합니다.

#### 테이블 생성

헤더1| 헤더2 |헤더3|헤더4
---|-----|---|---
셀1|셀2|셀3|셀4
셀5|셀6|셀7|셀8
셀1234|셀5678|셀9101112|셀13141516

#### 테이블 정렬
헤더1|    헤더2    |헤더3
:----------|:---------:|---------:
Left1234|Center1234 |Right1234

