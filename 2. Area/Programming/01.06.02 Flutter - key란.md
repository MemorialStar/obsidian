Created in | 22.09.18
ID는 [[00.00.01 두 번째 뇌#^bce603|여기]]를 참고할 것.

---
플러터는 무언가가 업데이트되었다고 판단할 때만 화면을 다시 draw하는데, 이때 그 업데이트를 기본적으로 type을 토대로 판별한다. 즉, 예를 들어 같은 타입의 서로 다른 두 오브젝트가 위치를 바꾸었을 때 화면은 다시 draw되지 않음.
이를 위해 플러터에서는 Key라는 개념을 만들어 각 오브젝트를 구분하고, 나아가 다른 페이지로 갔다가 돌아왔을 때 그 상태를 기억할 수 있도록 한다.
stl 에서 super.key가 바로 이것.
	ValueKey : 하나의 정보에서 생성되는 숫자, 문자열, 키 등
	ObjectKey : 객체를 분류하기 위한 Key
	UniqueKey : 특정 위젯에서 고유한 Key
	PageStorageKey : 스크롤 위치를 저장하기 위한 Key
	GlobalKey : 앱 전체에서 고유한 Key

[참고1](https://fronquarry.tistory.com/20)
[참고2](https://nsinc.tistory.com/214)
[참고3](https://www.youtube.com/watch?v=kn0EOS-ZiIc)

#_readings 

---
