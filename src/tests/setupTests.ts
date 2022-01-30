import fs from "fs";
import path from "path";

global.beforeEach(() => {
  const outputDir = "src/tests/output";

  fs.readdir(outputDir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(outputDir, file), (err) => {
        if (err) throw err;
      });
    }
  });
});
