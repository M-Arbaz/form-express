const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.post('/submit', (req, res) => {
  const name= req.body.name;
  const email= req.body.email;
  const edu= req.body.edu;

  console.log('i receive this from frontend', { name, email, edu });

  res.json({ message: 'form submit successfully' });
})
app.listen(3001, () => {
  console.log('Server started on port 3001');
});