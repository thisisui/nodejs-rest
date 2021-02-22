const fs = require("fs");

function writeDataToFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "UTF-8", (err) => {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = {
  writeDataToFile,
};
