import { execSync } from "node:child_process";
export function runBackup(targetDir) {
  return execSync("tar -czf backup.tar.gz " + targetDir);
}
