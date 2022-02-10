import * as fs from "fs";
import * as path from "path";
import * as https from "https";

main();

function main() {
  const DEFINITIONS_URL = "https://raw.githubusercontent.com/danielyxie/bitburner/dev/src/ScriptEditor/NetscriptDefinitions.d.ts";

  const targetPath = path.join(__dirname, "..", "src", "bitburner.d.ts");
  console.log(`Downloading file to ${targetPath}`);
  const file = fs.createWriteStream(targetPath);
  file.write('declare module "bitburner" {\n');
  https.get(DEFINITIONS_URL, function (response) {
    response.pipe(file);
    response.on('end', () => {
      fs.appendFileSync(targetPath, '\n}');
    });
  });
}
