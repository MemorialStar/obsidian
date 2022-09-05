한 코드에서는 classList를 수정하여 CSS에서 수정하도록, 그리고 다른 코드에서는 같은 요소에 대해 직접 style.color를 수정하여 색깔을 바꾸도록 한다면, 색깔 변화가 꼬이게 된다.

e.g. 아래의 코드에서는 두 번 클릭한 다음에는 onmouseenter/onmouseleave가 호출되어도 색깔이 변하지 않음
```javascript
function titleColortoggle() {

    const active = "active";

  

    console.log('title clicked');

    title.classList.toggle(active);

}

  

title.addEventListener('click', switchColor.bind(null, title, 'rgb(30, 144, 255)', 'rgb(0, 0, 0)'));

title.onmouseenter = titleColortoggle;
title.onmouseleave = titleColortoggle;
```