import fs from "node:fs";
export function readReport(req) {
  return fs.readFileSync(req.query.file, "utf8");
}
