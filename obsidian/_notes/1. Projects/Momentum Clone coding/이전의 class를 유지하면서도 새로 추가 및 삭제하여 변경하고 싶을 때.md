element.classList.add('새로운 클래스');
지우고 싶을 땐
element.classList.remove('기존 클래스');
혹은 토글하여 사용하고 싶을 땐
element.classList.toggle('클래스명');
을 하면 된다.

e.g. h1을 클릭할 때 'clicked'라는 클래스를 추가하여 이에 맞게 CSS style을 바꾸고 싶을 때

h1.onclick
h1.classLis