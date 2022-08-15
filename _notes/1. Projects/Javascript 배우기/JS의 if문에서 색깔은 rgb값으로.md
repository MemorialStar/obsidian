#HEX 코드는 JS 상에서 rgb로 변환돼서 == 할 때 값이 같아도 false가 나옴
e.g. 'rgb(253,253,253)' == '#fdfdfd' -> false

같은 이유로 'white' == 'rgb(255,255,255)' -> false