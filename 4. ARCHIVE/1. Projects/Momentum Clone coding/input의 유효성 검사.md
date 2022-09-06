if 문을 활용할 수도 있지만,
태그 안의 attribute를 활용하여 HTML에서 자동으로 유효성 검사를 하게 만들 수도 있다.

e.g.
<form id = "login-form">
	<input
		required
		maxlength="15"
		type="text"
		placeholder="What is your name?"
	/>
</form>

단, required를 html이 알아듣게 하기 위해서는 반드시 form 태그 안에 들어가 있어야 한다.


#readings #code  #javascript 