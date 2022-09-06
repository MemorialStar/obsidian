function add(e) {
	e.preventDefault();
	const val = Input.value;
	
	[[사용자의 브라우저에 무언가를 저장하고 싶다면|localStorage에 저장]]하고 싶다면...
	localStorage.setItem(KEY, val);
	
	submit을 받은 다음에 값을 초기화하고 싶은 경우...
	task_input.value = "";
	[[js를 이용하여 HTML에 무언가를 추가|HTML상에서 변형]]하고 싶다면...
}

elem_form.addEventListener('submit', add);

---
Input = .querySelector("입력받는 곳의 id");
KEY = localStorage에 저장될 KEY 값 (String)
elem_form = submit이 존재하는form의 element

#code #javascript 