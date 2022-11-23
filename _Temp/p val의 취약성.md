Created in | 22.11.22
ID는 [[00.00.01 두 번째 뇌#^bce603|여기]]를 참고할 것.

---
우리는 분석 결과가 통계적으로 유의미함을 밝힐 때 보통 p val을 이용하여, 해당 값이 null hypothesis를 reject하는지를 본다.
그러나 sample size가 아주 크다면, 실제로는 무의미할 정도로 작은 차이로도 그것이 통계적으로 유의미한 차이를 보이는 것처럼 결과가 나올 수 [있다](https://www.scribbr.com/statistics/statistical-significance/#:~:text=Try%20for%20free-,Problems%20with%20relying%20on%20statistical%20significance,-There%20are%20various). 그리고 그것은 특히 사회과학과 의학계에 publication bias, replication crisis 등을 일으켰을 정도로 중요한 문제이다.
(e.g. 18000명을 대상으로 한 체중변화 실험에서는 0.1kg라는 실생활에서 별로 의미 없는 차이일지라도 통계적으로 유의미하다고 판별됨 )

그렇다면 그 대안은 무엇인가?
APA 표준에서는 p val의 차이뿐만 아니라 [**Effect size**](https://www.scribbr.com/statistics/effect-size/)와 [**confidence intervals**](https://www.scribbr.com/statistics/confidence-interval/)를 같이 적도록 조언하고 있다.

### Effect size
- 두 샘플을 비교할 경우 : Cohen's d
- 두 변수를 비교할 경우 : [[Analytics와 Analysis의 종류|Pearson's r]] (corr)
### Confidence intervals
'true value'가 어느 범위 사이에 있는가? = **다시 실험했을 때 그 결과가 어떤 범위 안에 존재할 것인가?**
- 좁을수록 더 정확하다?
	 -> 아님 because 계산을 모집단의 수치가 아니라 표본을 이용했기 때문.
-  Confidence level = 1-[a](https://www.scribbr.com/frequently-asked-questions/which-alpha-value-to-use/) = 보통 95% (a = p val에서 쓰는 그 a)
	-  publish되는 연구 분야에서 어떤 a를 쓰는지를 봐야 한다
- Confidence intervals
	- 이를 구하기 위해서는 다음 네 가지를 먼저 알고 있어야 한다:
		1. point estimate(점추정, 표본에서 population에 대해 추정한 어떤 특정한 값, 보통 평균)
		2. critical values = 이 conf. level에서 conf. level을 벗어나기 위해 얼마나 큰 sd를 가져야 하는지 알려주는 값 = z val. or t val.
			- a를 고르고, 단방향/양방향 t-test인지를 고르고(e.g. 90% conf. level에 two-tailed의 a = 0.05), 이에 해당하는 z 값을 결정
			- 만약 샘플이 적고(<=30) noramlly distributed하다면 z dist. 대신 [t dist.](https://www.scribbr.com/statistics/t-distribution/)를 사용할 것(이 때에는 자유도를 알아야 한다)
		3. sd. of sample
		4. sample size
	- 이를 바탕으로 Conf. interval은 아래와 같이 정의된다.
			![[Confidence interval formula.png]]
	- 그러나, 실제 세계에서 우리는 population mean, population sd를 모르기 때문에 아래와 같이 계산한다.
		![[Confidence Interval formula in real life.png]]
	- 더 '정확한' 값을 구하기 위해서는 어떻게 하는가?
		- 정교한 sampling plan, realistic한 experiment

#_점검사항 #_datascience 

---
