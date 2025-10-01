# 실시간 회의 요약 시스템

## 소개
이 프로젝트는 **실시간 회의 음성 인식 + 내용 요약 + 보고서 자동 생성** 기능을 제공하는 웹서비스입니다.  
대학 또는 IT 기업 원격근무 환경에서 **회의 기록 관리**와 **자동화된 요약 제공**을 목표로 개발되었습니다.

---

## 전체 프로젝트 구조
```exodia
│  app.js           # Express 구동(서버)
│  package.json     # 의존성 관리
│  README.md        # 프로젝트 소개 문서
│  
├─config            # 설정 모듈
│      apiKeys.js   # 외부 API키 연동
│      db.js        # DB 연동
│      logger.js    # 로그 관리
│      
├─controllers       # 로직 처리
│      administController.js    # 관리자 로직 처리
│      meetingController.js     # 회의 로직 처리
│      payController.js         # 결제 로직 처리
│      userController.js        # 사용자 로직 처리
│      
├─models            # DB 스키마 정의
│      logModel.js      # 실시간 로그 스키마
│      meetingModel.js  # 회의 스키마
│      payModel.js      # 결제 스키마
│      userModel.js     # 사용자 스키마
│          
├─public            # 정적 파일 서빙(Nginx로 변경 후 제거 예정)
│  │  index.html
│  │  
│  ├─images
│  ├─javascripts
│  ├─stylesheets
│  │      style.css
│  │      
│  └─uploads
└─routes            # 라우터 관리
        administ.js     # 관리자 API 라우팅
        index.js        # 기본 라우팅
        meeting.js      # 회의 API 라우팅
        pay.js          # 결제 API 라우팅
        users.js        # 사용자 API 라우팅
```
       
# 프로젝트 구조 및 설명

## app.js
- Express 서버 구동
- 미들웨어 등록 및 라우터 연결

## config/
- **apiKeys.js**: 외부 API 키 관리
- **db.js**: DB 연결 설정
- **logger.js**: 요청/에러 로그 관리

## controllers/
- **administController.js**: 관리자 기능 (권한 제어, 시스템 관리)
- **meetingController.js**: 회의 생성 및 종료, 실시간 음성 인식, 회의 요약, 보고서 처리
- **payController.js**: 결제/시간 과금 처리
- **userController.js**: 회원 가입, 로그인 처리

## models/
- **logModel.js**: 회의 로그 저장
- **meetingModel.js**: 회의 정보/요약 저장
- **payModel.js**: 결제 내역 저장
- **userModel.js**: 사용자 정보 저장

## public/ *(삭제 예정)*
- **index.html**: 메인 진입 페이지(홈)
- **images/**: 이미지 리소스
- **javascripts/**: 클라이언트 JS
- **stylesheets/style.css**: 공용 스타일
- **uploads/**: 업로드된 파일 저장

## routes/
- **administ.js**: 관리자 API
- **index.js**: 기본 라우팅
- **meeting.js**: 회의 API
- **pay.js**: 결제 API
- **users.js**: 사용자 API
