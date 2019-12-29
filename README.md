# 스토리 라인 (기능 명세)

## Front (Web)

1. 음식 검색 페이지
   - 음식 입력
   - 해당 음식을 검색 (이름으로)
   - 해당 음식과 관련된 조합 리스트가 보여짐 

# API 문서

|    구분     |     url     | method | parameter |      response       |
| :---------: | :---------: | :----: | :-------: | :-----------------: |
| 검색 페이지 |             |  get   |           |                     |
|  음식 검색  | /api/search |  get   |   food    | Result(조합 리스트) |

# DB 구조

- ### Food

  - name
  - category
  - combinations
  
- ### Combination

  - name
  - foods



