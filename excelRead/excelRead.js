import xlsx from 'xlsx';
import path from 'path';
import { numberToAlphabet } from '../utils/utils.js';
import { filePath, projectPath } from '../utils/pathConfig.js';

const readExcel = (excelName) => {
  const excelFilePath = filePath(
    path.join(projectPath, 'excelData'),
    excelName
  );

  // console.log(excelFilePath);

  const workbook = xlsx.readFile(excelFilePath);

  // 1. worksheet 파악하기
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  // 2. 영역이 몇개까지 되는가 알아보기

  const range = xlsx.utils.decode_range(worksheet['!ref']); // 엑셀 데이터 분포 영역 파악하기

  // 행의 수 (이상함 일단 쓰지마셈)
  const numberOfRows = range.e.c - range.s.c + 1;

  // 열의 수 (이상함 일단 쓰지마셈)
  const numberOfColumns = range.e.r - range.s.r + 1;

  // 행의 알파벳

  // const yo = numberToAlphabet(numberOfColumns);
  // console.log(numberOfColumns);
  // console.log(yo);

  // 첫 행의 목차들 확인하기
  // 예) A목차: id, B목차

  let result = [];

  for (let i = 2; i < numberOfColumns + 1; i++) {
    const name = worksheet[`A${i}`].v;
    // const name = worksheet[`B${i}`].v;
    // const email = worksheet[`C${i}`].v;
    // const title = worksheet[`D${i}`].v;
    // const body = worksheet[`E${i}`].v;

    result.push({ name });
  }

  return result;
};

export default readExcel;
