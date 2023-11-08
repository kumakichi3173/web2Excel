const express = require('express');
const bodyParser = require('body-parser');
const Excel = require('exceljs');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// GETリクエストハンドラ
app.get('/', (req, res) => {
    res.send('Welcome to the Excel update API!');
  });

// POSTリクエストハンドラ
app.post('/update-excel', async (req, res) => {
    const { data1, data2 } = req.body;
    const workbook = new Excel.Workbook();
    try {
        await workbook.xlsx.readFile('yourfile.xlsx'); // 既存のExcelファイルを読み込む
        const worksheet = workbook.getWorksheet('Sheet1'); // シート名に合わせて変更
        
        // 新しい行を追加
        worksheet.addRow([data1, data2]);
        
        await workbook.xlsx.writeFile('yourfile.xlsx'); // ファイルに書き込む
        res.status(200).send({ message: 'Excel updated successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Failed to update Excel', error });
    }
});

const PORT = 3000; // 使用するポート番号を選択
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
