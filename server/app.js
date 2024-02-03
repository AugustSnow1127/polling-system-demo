const express = require('express');
const cors = require('cors'); // Import the cors module
const app = express();

// Enable CORS
app.use(cors());

// 設定路由
app.get('/api', (req, res) => {
  res.send('Hello, World!');
});

// 啟動伺服器
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
