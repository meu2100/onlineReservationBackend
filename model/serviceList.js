// 讀取資料

// 改用Promise
const fs = require("fs");

function readFileAsync(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
}

module.exports = readFileAsync;
