import fs from 'node:fs';
import path from 'node:path';

export function resolveProperty(filePath, key) {
  let dir = path.dirname(filePath);
  const candidate = path.join(dir, 'resources', 'benchmark.properties');
  const lines = fs.readFileSync(candidate, 'utf8').split(/\r?\n/);
  return lines.find((line) => line.startsWith(`${key}=`)) || null;
}

export function readUserFile(request) {
  return fs.readFileSync(request.query.file, 'utf8');
}
