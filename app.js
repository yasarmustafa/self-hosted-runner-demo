const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Deployed version: 2.0.1');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//test line
