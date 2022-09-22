---
title: ECG Analysis with Matlab
tags: _matlab, _ecg, _coding
state: 진행중
start-date: 22.08
end-date: YYYY-MM
---
# Overview
---
ECG데이터와 이와 관련된 biosignals(Chest Expansion, Skin temp., REspiration Rate, GSR)을 아래 조건에 맞추어 분석해야 함;
	1. 실험은 EO(5min.), EC(5min.), Non-Stim(30min.), Stim(30min.) 순으로 진행되었음. 따라서 각 interval마다 각 factor의 변화 혹은 변화율을 계산해야 한다.
	2. ECG와 관련하여 아래 항목을 계산해야 한다.
		1. RRMED
		2. RRIQR
		3. SDNN
		4. RMSSD
		5. LF : low frequency 비율 (between 0.04 Hz and 0.15 Hz), short term(1~5 min.)
			- SNS(sympathetic nervous system, 교감신경계)와 PNS(parasympathetic nervous system, 부교감신경계)에 대한 정보를 담고 있음.
			- thermoregulation and peripheral vasomotor activity에 대한 정보를 담고 있음.
		6. HF : high frequency 비율 (between 0.16 Hz and 0.4 Hz)
			- 자율신경계에 의한 부교감신경 활성과 연관 있음.
			- [[ECG Analysis with Matlab#^f3fa1e|RSA]](respiratory sinus arrhythmia, 호흡 동성 부정맥)을 결정하는 major determinant. RSA를 증가시키는 훈련은 천식, 고혈압, 다양한 불안 장애 등 자율신경계가 중요한 역할을 하는 여러 질환들의 치료에 도움이 된다고 알려져 있다.
		* 각 신호들의 정상 범위*
			![[HRV factors.png]]
	3. 모든 데이터에 존재하는 노이즈를 적절히 필터링해야 한다. 특히 실험의 마지막 5분에 주로 심한 움직임이 있었기 때문에 정 안 되면 이를 잘라내야 함.
	4. 처리한 데이터를 적절히 시각화해야 한다. 

# Milestones
---
- [ ] 주어진 데이터를 각 signal 별로 나누어 ~~리스트~~ DataFrame 형태로 저장하는 함수 제작
- [ ] ECG data filtering
- [ ] 주어진 data를 시작 시각과 끝 시각으로 자르는 함수 제작
	- [ ] 각 인터벌이 시작되는 시간(unit: sec.)을 리스트-timeInt로 저장한 후 이를 for문을 사용해 불러온다.
- [ ] 주어진 HRV data에 대해 아래 값을 계산하는 함수 제작;
	- [ ] RRMED
	- [ ] RRIQR
	- [ ] SDNN
	- [ ] RMSSD
	- [ ] Power v.s. Frequency domain graph + LF, HF
- [ ] 주어진 데이터에 대해 평균값을 계산하는 함수 제작. 이는 GSR, SKIN TEMP., BR의 데이터 해석에 사용된다.
- [ ] 위의 함수들을 통해 저장된 값의 리스트를 y축, timeInt에서 각 시간 간격에 대한 레이블을 x축으로 설정하여 그래프를 그리는 함수 작성


# Related Blocks
---
[[01.05.04 pandas - 데이터 불러오기]]
[[01.05.07 python naming rule]]
[[01.05.06 python - string formatting]]
[[01.05.03 IndentationError - unexpected indent]]
[[01.05.05 pyplot - 그래프 그리기]]

# Log
---
- kaggle을 참고하여 ecg 필터링 함수 및 시각화 구현 완료
	- 데이터 포맷에 맞게, ms -> s로 바꾸어서
	- ecg 필터링 방법
		1. scipy.signal.butter를 이용하여 butterworth filter적용, ecg signal이 아닌 그래프 전체적인 개형을 판별
			b, a = signal.butter(3, 0.07)
			shape = signal.filtfilt(b, a, ecg_signal)
		2. 1의 필터를 통해 얻어낸 개형을 제거하여 ecg signal만 추출
		3. ~~signal에서 correlation 혹은 template를 이용해 피크 검출
			if qrs_filter is None:
			(뒤의 숫자가 클수록 거시적인 부분을 그려냄!)
			t = np.linspace(1.5 * np.pi, 3.5 * np.pi, factor)
			z = 1/(1 + np.exp(-t))
			qrs_filter = z*(1-z)
		4. signal에서 hann windowing 및 convolution을 이용하여 피크 검출
			windowing을 하면 마지막 부분이 잘리게 되는데 이를 0으로 채움
- 작업한 ipynb 파일을 여러 개의 python 파일들로 나누어 리팩터링 진행
	- load_data
	- peak_detection
	- graph
	- preprocess
	- analyze
- 모든 결과값이 정상값과 매우 다르게 나옴. Welch method의 파라미터 값을 바꿈에 따라 값이 바뀜. 파라미터 세팅은 [다음](https://www.biopac.com/wp-content/uploads/app246.pdf)을 참고했음.
- 데이터 형식이 각자 다름. NAS에서 원본 데이터를 확인해볼 예정
	- 형식은 같으나 중간에 다시 측정된 부분이 있는 데이터가 존재함. 이를 통일시켜주는 코드 작성
- group peak를 median이 아니라 mean을 이용하여 계산. median으로 할 경우 FDS가 ecg filter threshold(FILTER_THRESHOLD)에 따라 신뢰할 수 없을 정도로 변하기 때문.
# References
---
https://oatext.com/heart-rate-variability-highlights-from-hidden-signals.php
http://www.koreascience.kr/article/JAKO200634515155251.pdf ^f3fa1e
https://www.kaggle.com/code/stetelepta/exploring-heart-rate-variability-using-python
https://swharden.com/blog/2020-09-23-signal-filtering-in-python/
https://www.machinelearningplus.com/plots/top-50-matplotlib-visualizations-the-master-plots-python/