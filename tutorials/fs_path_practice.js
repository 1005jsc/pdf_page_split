import fs from 'fs';
import path from 'path';

////  nodejs 경로 연습하기

// 1. 현재 이 test.js 위치 가져오기
const fileLocation = process.argv[1];

console.log(fileLocation);

// 2. 현재 파일 디렉토리와 파일 이름 가져오기

console.log(path.dirname(fileLocation)); // 현재 파일 디렉토리
console.log(path.basename(fileLocation)); // 현재 파일 이름

// 3. 중간에 폴더 끼어 있을때

console.log(path.join(path.dirname(fileLocation), 'pdf'));

// 4. 상대경로 다루기

const jsonPath = path.join(fileLocation, '..', 'config', 'dev', 'foobar.json');
// console.log(jsonPath);
// const jsonString = fs.readFileSync(jsonPath, 'utf8');
