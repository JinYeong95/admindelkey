const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// 편집 폼 렌더링
app.get('/users/edit', (req, res) => {
  res.render('editUser', { user });
});

// 사용자 정보 업데이트
app.post('/users/update', (req, res) => {
  const { id, name, email } = req.body;

  // 여기서 사용자 정보 업데이트 작업을 수행합니다.
  user = { id, name, email };

  res.redirect('/users/edit'); // 편집 폼으로 리다이렉트
});

// HTML 파일 제공
app.get('/users/edit', (req, res) => {
  res.sendFile(__dirname + '/editUser.html');
});

// 서버 시작
app.listen(3000, () => {
  console.log('서버가 3000 포트에서 실행 중입니다.');
});