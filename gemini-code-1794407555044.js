const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Statik arayüz dosyalarını sun
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', brand: 'Pat Aksesuar' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Pat Aksesuar Operasyon Paneli devrede: Port ${PORT}`);
});