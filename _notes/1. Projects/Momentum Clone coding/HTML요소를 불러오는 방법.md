getElementsByTagName({태그})
getElementsByClassName({클래스명})

querySelector()
	"body" : body 태그
	"#day" : id = day
	".hello" : class = hello
	**QuerySelector**는 첫 번째 요소만 갖고 온다.
	모든 요소를 배열 형태로 갖고 오고 싶으면 QuerySelectorAll을 사용할 것
	혹은 n 번째 요소를 갖고 오고 싶다면 querySelector('~*:nth-child(n)*')를 사용할 것

	e.g.
	document.querySelector(".hello h1") => hello class의 h1 항목을 갖고 옴
	parent.querySelector('#first') => parent 객체의 id=first인 항목을 갖고 옴

#javascript  #howto