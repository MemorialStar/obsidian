Created in | 22.09.19
ID는 [[00.00.01 두 번째 뇌#^bce603|여기]]를 참고할 것.

---

### 화살표 함수
간단한 경우에 { return res; } 를 => res;로 줄일 수 있음
String sayHi(String name) => 'Hi $name!';

### 파라미터
중괄호 : named parameter
- 이름으로 파라미터 전달 가능
- 사용할 때에는 {이름} : {값}으로 사용한다.
	- e.g.) void say({required String name, required int age }) => 'Hi $name, $age old!';
	- say(name : 'Tom', age : 24);

대괄호 : optional parameter


[참고](https://velog.io/@dosilv/Flutter-Dart-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC-type-operator-function-null-safety)

#_readings 


---
