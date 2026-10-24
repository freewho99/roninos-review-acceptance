import fs from 'node:fs';

export function readUserFile(request) {
  return fs.readFileSync(request.query.file, 'utf8');
}

export function readReport(request) {
  return fs.readFileSync(`/srv/reports/${request.query.name}`, 'utf8');
}
