스크립트를 HTML 상에 따로 빼서 적는 방법.

e.g.

<html>
<body>
	<input type = "button" id = "wf" value = "hello world" />

	<script>
		var wf = document.getElementbyId('wf');
		wf.addEventListener('click', function(){
			alert("Hello world");
		})
	</script>
</body>
</html>

1번 방법의 단점을 해결하긴 했지만, 여전히 코드가 한 군데에 있다.