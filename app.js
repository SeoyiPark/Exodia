const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// public 폴더를 정적 파일 제공 경로로 설정
app.use(express.static(path.join(__dirname, "public")));

// 루트("/") 접속 시 index.html 반환
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ 서버가 실행 중입니다: http://localhost:${PORT}`);
});