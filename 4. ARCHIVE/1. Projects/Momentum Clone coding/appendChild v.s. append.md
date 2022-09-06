append는 여러 개의 노드 + 문자를 추가할 수 있는 반면,
appendChild는 오직 하나의 노드만 추가할 수 있다.

또 appendChild만이 값(Node object)를 반환한다.

e.g. 

```js
const div = document.createElement('div');
const span = document.createElement('span');
const p = document.createElement('p');

document.body.append(div,'hello',spand,p); => 가능
document.body.appendChild(div,'hello',spand,p); => 불가능
```

[출처](https://webruden.tistory.com/634)

#readings #javascript 