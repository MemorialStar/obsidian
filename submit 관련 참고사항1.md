submit의 eventListener는 submit 태그가 아니라 이를 감싸고 있는 form에 적용해야 한다.

e.g.
```HTML
<form id="todo-form">
            <input type="text" id="todoInput"
                required
                maxlength="40"
                placeholder="Write new task..."
            />
            <!-- submit button -->
            <input type="submit" id="todoSubmit" value="add task" />
            <!-- tasks -->
            <ul id="tasks"></ul>
</form>
```
인 경우 todoSubmit.addEventListener가 아니라 todoForm.addEventListener를 해야함

#readings #javascript