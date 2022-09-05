fetch를 사용한다;
```js
fetch(url, options)
  .then((response) => console.log("response:", response))
  .catch((error) => console.log("error:", error));
```

response의 형태가 json이라면, console.log("response:", response) 대신...
```js
.then((response) => response.json())
.then((data) => {
	console.log(//먼저 url 클릭해서 데이터 형태 확인한 후 여기에 알맞은 데이터 불러오기);
});
```
을 사용하면 된다.

#howto #code #javascript 