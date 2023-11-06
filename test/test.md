# 분기 처리 테스트
  ## 내용입력
1. testA 브랜치에 문자열 입력 - This is testA branch
2. testB 브랜치에 문자열 입력 - This is testB branch

  ## 진행과정
  1. 브랜치로 이동해서 각각을 병합하기
  2. test 브랜치에서 testA 브랜치와 testB 브랜치로 분기되는지 확인
  3. test 브랜치에 병합하면 분기 처리된 브랜치가 병합된 것을 그래프로 확인할 수 있는지 점검

  ## 확인
  1. test에서 testA 브랜치로의 분기: O
  2. test에서 testB 브랜치로의 분기: X <br>

    testA에서 testB로 분기된 것으로 보인다.