```js

const obj = 추가하고_싶은_오브젝트의_정보를_담은_텍스트(String)

//태그 이름을 입력. 가령 img인 경우
const element = document.createElement('img');

//아래에 element의 정보를 입력한다.
//가령, element가 리스트 태그일 경우...
element.innerText = obj;

document.body.appendChild(element);

```

element가 이미지 태그일 경우...

element.src =  `img/${obj}`;
	- 이때에는 obj가 파일명이 될 것이다.
element.alt = "background image";

obj는 해당 태그 안에 들어갈 말이 될수도, 혹은 태그의 정보가 될 수도 있다.

#code #javascript 