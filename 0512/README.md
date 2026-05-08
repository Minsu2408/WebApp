# [PRD] Paw-Link: 실시간 유기동물 매칭 및 관리 플랫폼

## 1. 프로젝트 개요
- **제품명:** Paw-Link (포링크)
- **한줄 정의:** 공공 API 데이터 기반의 상세 정보와 AI 추천, Firebase 실시간 기능을 결합한 유기동물 입양 지원 서비스
- **핵심 목표:** 파편화된 유기동물 정보를 체계적으로 시각화하고, 사용자 맞춤형 추천을 통해 입양률을 제고함.

---

## 2. 사용자 기능 요구사항 (Functional Requirements)

### 2.1 인증 및 계정 관리 (Auth)
- **회원가입/로그인:** 이메일 및 비밀번호 기반 (Firebase Auth 사용).
- **마이페이지:** - 개인정보 관리: 이름, 전화번호 수정 기능.
    - 보안: 비밀번호 변경 기능.
    - 활동 내역: 내가 '찜'한 아이들 목록 바로가기.

### 2.2 메인 및 추천 화면 (Home & AI)
- **AI 맞춤 추천:** 사용자의 선호도(품종, 크기 등)나 활동 로그를 기반으로 추천 유기동물 노출.
- **퀵 네비게이션:** 상단 카테고리 탭(전체 / 유기견 / 유기묘)을 통해 빠른 목록 전환.

### 2.3 대시보드형 목록 화면 (Dashboard)
- **레이아웃:** 카드 형태의 그리드 뷰 (대시보드 스타일).
- **요약 정보:** 사진, 이름(또는 품종), 성별, 발견 장소, 공고 상태 요약 노출.
- **카테고리 필터:** 유기견/유기묘 탭 분리 및 상태별(공고중/보호중) 필터링.

### 2.4 상세 정보 페이지 (Detail View)
각 유기동물 클릭 시 진입하며, 아래의 공공 데이터 항목을 섹션별로 시각화함.

**[A. 핵심 액션]**
- **찜 기능:** 하트 버튼 클릭 시 나의 찜 목록에 실시간 추가/삭제 (Firestore 연동).

**[B. 기본 정보]**
- 유기번호, RFID(칩 번호), 접수일, 발견 장소, 축종(강아지/고양이), 품종, 나이, 체중.

**[C. 공고 및 상태]**
- 공고번호, 공고 시작/종료일, 현재 상태(공고중/보호중), 성별, 중성화 여부, 특징 설명.

**[D. 관리 및 보건]**
- 관리등록번호, 보호소명, 보호소 번호, 보호 장소, 담당자 및 관할 기관.
- 예방접종 여부, 건강검진 정보, 최종 수정일.

### 2.5 찜 목록 화면 (Wishlist)
- **사용자 경험:** 메인 대시보드와 유사한 UI를 유지하여 일관성 제공.
- **기능:** 내가 찜한 아이들만 필터링하여 리스트업, 상세 페이지로의 빠른 이동.

---

## 3. 데이터베이스 설계 (Firestore Schema)

### 3.1 [Collection] users
- `uid`: string (PK)
- `email`: string
- `name`: string
- `phone`: string
- `wishlist`: array (reportIds) // 찜한 게시글 ID 배열

### 3.2 [Collection] pets (API + User Data)
- `id`: string (PK)
- `animalType`: string (dog/cat)
- `happenDt`: string (접수일)
- `happenPlace`: string (발견장소)
- `kindCd`: string (품종)
- `colorCd`: string (모색)
- `age`: string
- `weight`: string
- `noticeNo`: string (공고번호)
- `noticeSdt`: string (공고시작일)
- `noticeEdt`: string (공고종료일)
- `popfile`: string (이미지 URL)
- `processState`: string (상태)
- `sexCd`: string (성별)
- `neuterYn`: string (중성화여부)
- `specialMark`: string (특징)
- `careNm`: string (보호소명)
- `careTel`: string (보호소번호)
- `careAddr`: string (보호장소)
- `chargeNm`: string (담당자)
- `orgNm`: string (관할기관)
- `vaccination`: string (예방접종여부)
- `healthCheck`: string (건강검진정보)
- `updateDt`: timestamp (수정일)

---

## 4. 기술 스택 및 환경
- **Frontend:** React.js, Tailwind CSS (대시보드 UI 구현용).
- **Backend:** Firebase (Authentication, Firestore).
- **Data:** 공공데이터포털(data.go.kr) 유기동물 정보 조회 서비스 API.
- **AI:** 추천 로직 구현을 위한 단순 필터링 알고리즘 또는 외부 모델 연동.

---

## 5. UI/UX 요구사항
- **반응형 디자인:** 모바일에서도 상세 테이블 데이터를 한눈에 볼 수 있도록 최적화.
- **실시간성:** 찜 버튼 클릭 시 새로고침 없이 마이페이지와 찜 목록에 즉시 반영.
- **시각화:** 상태(공고중)에 따라 강조 색상(예: 초록색/빨간색) 적용하여 긴급도 표시.
