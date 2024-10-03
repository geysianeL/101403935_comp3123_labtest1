// Student Name: Geysiane Lopes Bezerra
// StudentID: 101403935
const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, "Logs");


const createLogs = () => {
    if (!fs.existsSync(logsDir))
        fs.mkdirSync(logsDir);

    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        const filePath = path.join(logsDir, fileName);
        fs.writeFileSync(filePath, `This is log file number ${i}`);
        console.log(fileName);
    }
}

const deleteLogs = () => {
    if (fs.existsSync(logsDir)) {
        let files = fs.readdirSync(logsDir);
        for (let file of files) {
            const fullFilePath = path.join(logsDir, file);
            fs.unlinkSync(fullFilePath);
            console.log(`delete files...${file}`);
        }
    }
}

createLogs();
deleteLogs();
