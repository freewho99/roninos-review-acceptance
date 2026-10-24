import fs from 'node:fs';
import path from 'node:path';

export function readUserFile(request) {
  return fs.readFileSync(request.query.file, 'utf8');
}

export function readReport(request) {
  return fs.readFileSync(path.join('/srv/reports', request.query.name), 'utf8');
}
