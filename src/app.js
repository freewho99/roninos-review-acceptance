import fs from 'node:fs';

export function readUserFile(request) {
  return fs.readFileSync(request.query.file, 'utf8');
}
