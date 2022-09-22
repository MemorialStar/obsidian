Created in | 22.09.18
ID는 [[00.00.01 두 번째 뇌#^bce603|여기]]를 참고할 것.

---

``` Dart

class _RandomWordsState extends State<RandomWords> {
  final suggestions = <WordPair>[];
  final saved = <WordPair>{};
  static const biggerFont = TextStyle(fontSize: 18);
  
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      padding: const EdgeInsets.all(16.0),
      itemBuilder: (context, i) {
        if (i.isOdd) return const Divider();
  
        final index = i ~/ 2;
        if (index >= suggestions.length) {
          suggestions.addAll(generateWordPairs().take(10));
        }

        final alreadySaved = saved.contains(suggestions[index]);

		return ListTile(
          title: Text(
            suggestions[index].asPascalCase,
            style: biggerFont,
          ),
			trailing: Icon(
            alreadySaved ? Icons.favorite : Icons.favorite_border,
            color: alreadySaved ? Colors.red : null,
            semanticLabel: alreadySaved ? 'Remove from saved' : 'Save',
          ),
          onTap: () {
            setState(() {
              if (alreadySaved) {
                saved.remove(suggestions[index]);
              } else {
                saved.add(suggestions[index]);
              }
            });
          },
        );
      },
    );
  }
}


```

#_code 

---
