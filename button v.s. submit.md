button은 사용자가 직접 클릭을 해야 함.
그러나 submit은 엔터를 해도 클릭된 것과 같은 이벤트를 낼 수 있다.

단, addEventListener에서는 click과 submit을 구분함을 유의할 것.
또 submit은 그 뜻대로 submit이 되면 기본적으로 페이지가 새로고침된다.
이를 원치 않는다면 submit될 때 실행되는 함수에서 첫 번째 argument로 이벤트를 받고
해당 이벤트.preventDefault();를 함수 내에서 실행하도록 하면 된다.

e.g.

function onLoginSubmit(e) {e.preventDefault(); console.log(e);}
loginForm.addEventListener("submit", onLoginSubmit);

#howto  #html #code 