# toy-vscode-log-filter

Log File에서 특정 문자가 시작하는 Line만 Filter하는 VSCode Extension입니다.
- 주로 WAS Log에서 특정 패턴을 찾기 위해 만들었습니다.
- 예로 LGCNS MDD의 경우, 각 Operation의 호출은 특정 문자열로 시작하는 경우가 있습니다.
- 그러니, 앞 공통부분(주로 GUID)은 건너뛰고 Operation 호출문자열만 출력하면, 하나의 Service가 내부적으로 호출하는 모든 단계를 찾을 수 있을 것으로 예상합니다. (아직 안해봤습니다.)

## Usage
- VSCode에서 "Cntl + ,"를 눌러 설정화면을 출력합니다.
- 설정 항목 찾기(상단의 Search)에 "logfilter"라고 입력하면 2개의 설정 항목이 나타납니다.
- Filter Character: 필터할 시작문자열을 입력합니다. "★★" 이렇게 입력하면 로그중에 ★★인 행(Line)만 거르게 됩니다.
- Position: (예를 들어 ★★)문자열의 시작위치를 지정합니다. 문자열이이 JavaScript는 0부터 시작하지만, 우리는 사람임으로 1부터 계산 되도록 했습니다.

## Release Notes

### 0.0.1 (2024.07.21)
- VSCODE Engin: 1.91.1
첫 릴리즈. 일요일. 집. 서재. 아직 사무실에 가서 안해봤으니 정상적으로 작동 할런지 안할런지 알 수가 없습니다. 폐쇄망에서 일하다보니 이런 점은 애로사항이네요.

---
## For more information

* [Extension GitHub](https://github.com/halfenif/toy_vscode_log_filter)

**Enjoy!**
