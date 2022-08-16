title = document.querySelector('h1');
background = document.querySelector('body');

function switchColor(self, color1, color2) {
    console.log(self.tagName +' color swtiched');

    if(self.style.color == color1) self.style.color = color2;
    else self.style.color = color1;

}

function titleColortoggle() {
    const active = "active";

    console.log('title clicked');
    title.classList.toggle(active);
}


title.onclick = titleColortoggle;

title.addEventListener('beforecopy', alert.bind(null, 'you cannot copy this!'));
document.body.onresize = switchColor.bind(null, document.body, 'rgb(245, 245, 220)', 'rgb(0, 0, 0)');