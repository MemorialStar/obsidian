\#: id
\. : class
\* : 여러번 중복
\$ : 숫자 (포맷 : \$\$\$)
	$@ : 넘버링 변경 가능 e.g. $@-3  : 거꾸로해서 3까지
\+ : 병렬적으로 구성
\^ : 상위 트리로 감
{} : 텍스트

[출처](https://docs.emmet.io/abbreviations/syntax/)

e.g.
#page>div.logo+ul#nav>li*5>a{Item $}
<div id="page">
            <div class="logo"></div>
            <ul id="nav">
                <li><a href="">Item 1</a></li>
                <li><a href="">Item 2</a></li>
                <li><a href="">Item 3</a></li>
                <li><a href="">Item 4</a></li>
                <li><a href="">Item 5</a></li>
            </ul>
        </div>
