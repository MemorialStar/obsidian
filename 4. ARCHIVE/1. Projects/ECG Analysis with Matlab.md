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
- [ ] 


# Related Blocks
---


# References
---
https://oatext.com/heart-rate-variability-highlights-from-hidden-signals.php
http://www.koreascience.kr/article/JAKO200634515155251.pdf ^f3fa1e
https://www.kaggle.com/code/stetelepta/exploring-heart-rate-variability-using-python