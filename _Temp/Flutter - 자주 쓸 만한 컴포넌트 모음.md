Created in | 22.09.18
ID는 [[00.00.01 두 번째 뇌#^bce603|여기]]를 참고할 것.

---

- Divider() : ---
- (정수).isOdd : 홀수인지 판별
- AppBar 템플릿
	MyApp() 의 home: {stl class명}(),을 한 다음 {stl class}의 build에서
	``` Dart
	return Scaffold(
	appBar: AppBar(actions: [
		//AppBar에 넣을 액션들 넣기
		IconButton(
			onPressed: _pushSaved,
			icon: const Icon(Icons.list),
			tooltip: 'Saved Suggestions',
		)
		],
	),
	body: ...
	```
- [새로운 페이지로 전환](https://flutter-ko.dev/docs/cookbook/navigation/navigation-basics)
	``` Dart
	import 'package:flutter/material.dart';
	
	void main() {
	  runApp(MaterialApp(
	    title: 'Navigation Basics',
	    home: FirstRoute(),
	  ));
	}
	
	class FirstRoute extends StatelessWidget {
	  @override
	  Widget build(BuildContext context) {
	    return Scaffold(
	      appBar: AppBar(
	        title: Text('First Route'),
	      ),
	      body: Center(
	        child: RaisedButton(
	          child: Text('Open route'),
	          onPressed: () {
	            Navigator.push(
	              context,
	              MaterialPageRoute(builder: (context) => SecondRoute()),
	            );
	          },
	        ),
	      ),
	    );
	  }
	}
	
	class SecondRoute extends StatelessWidget {
	  @override
	  Widget build(BuildContext context) {
	    return Scaffold(
	      appBar: AppBar(
	        title: Text("Second Route"),
	      ),
	      body: Center(
	        child: RaisedButton(
	          onPressed: () {
	            Navigator.pop(context);
	          },
	          child: Text('Go back!'),
	        ),
	      ),
	    );
	  }
	}
	
	```
- Theme 설정 : MyApp의 return [~~const~~](https://medium.com/@marcglasberg/sorry-but-the-themedata-cant-be-made-const-so-you-can-t-use-it-in-constructors-3d7cad4f6521) MaterialApp 안에서
	```Dart
	theme: ThemeData(
	appBarTheme: const AppBarTheme(
		backgroundColor: Colors.white,
		foregroundColor: Colors.black,
	),
      ),
	```
- [다른 페이지에 인자 설정](https://fronquarry.tistory.com/12) ([참고](https://flutter-ko.dev/docs/cookbook/navigation/passing-data))
	```Dart
	class SavedRoute extends StatelessWidget {
	Set<WordPair> saved; //final로 설정해주면 안 됨
	SavedRoute(this.save, ..., {Key? key}) : super(key: key);
	```
- 클릭했을 때 다른 페이지로 이동
```Dart
	// Within the `FirstRoute` widget
	onPressed: () {
	Navigator.push(context,
		MaterialPageRoute(builder: (context) => SecondRoute()),
	);
	}
```


[참고](https://velog.io/@dosilv/Flutter-Dart-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC-type-operator-function-null-safety)

#_code

---
