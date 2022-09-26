Created in | 22.09.21
ID는 [[00.00.01 두 번째 뇌#^bce603|여기]]를 참고할 것.

---
data : Series 데이터를 갖고...

### 값이 특정 조건을 만족하는 곳의 index
data.index\[data['Value'] == val\]

### index가 특정 조건을 만족하는 곳의 iloc
pd.Index(data.index).get_loc(val) //이를 이용하면 다른 형태의 데이터도 가능
	data.index를 pandas.Index 형태로 만들어준 후 val을 갖는 위치를 출력한다
혹은
data.index.get_loc(val)
어디에 위치하고 있는지 알고 싶다면
np.where(data.index.get_loc(val))[0])

### index를 list 형태로 바꾸기
data.index.values.tolist()
그 반대는(리스트를 인덱스)
~~data.reindex(index_list)~~
data.index = index_list  //위의 방법으로 하면 unique value error 호출

### index에서 중복되는 값을 찾기
cannot reindex on an axis with duplicate labels 에러가 뜰 때 디버깅 가능
data\[data.index.duplicated()\]
혹은
data.index.is_unique

#_howto  

---
