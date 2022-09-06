let sf  = loginInput.value;
print = (val) => {console.log(val);}
loginButton.addEventListener("click", print.bind(null, sf));

에서 print.bind는 처음 함수가 만들어질 때 저장된 값을 사용한다.
즉, print를 호출할 때마다 sf를 업데이트하는 것이 아니라 처음 sf에 저장된 값('')를 호출하게 되는 것.

이는 아래 중 하나의 방법으로 고칠 수 있다;

callEvent = function() {
    console.log(loginInput.value);
}
loginButton.addEventListener('click', callEvent);

---
getValue = function(obj) {
    console.log(obj.value);
}
loginButton.addEventListener('click', getValue.bind(null, loginInput));

#error #readings #javascript  #code 