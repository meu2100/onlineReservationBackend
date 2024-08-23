//使用新增刪除
const fs = require("fs").promises;

async function writeFileAsync(filePath, data) {
  try {
    await fs.writeFile(filePath, data, "utf8");
  } catch (err) {
    throw err;
  }
}

module.exports = writeFileAsync;