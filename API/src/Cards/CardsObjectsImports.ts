import "./CardsRegistry";
import * as fs from "fs";
import * as path from "path";

const objectsDir = path.join(__dirname, "./Objects");

fs.readdirSync(objectsDir)
  .filter((file) => file.endsWith("CardsObject.ts") && file !== "CardsObject.ts")
  .forEach((file) => {
    require(path.join(objectsDir, file));
    console.debug(file)
  });
