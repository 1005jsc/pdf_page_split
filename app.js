import path from 'path';

import readExcel from './excelRead/excelRead.js';
import splitPdf from './splitPdf/splitPdf.js';
import { filePath, projectPath } from './utils/pathConfig.js';

const run = async (excelName, pdfName, year) => {
  /// 1. excel을 배열 데이터로 받아
  const excelDataArr = readExcel(excelName);

  console.log(projectPath);

  const pdfFilePath = filePath(path.join(projectPath, 'pdf'), pdfName);

  console.log(pdfFilePath);
  await splitPdf(pdfFilePath, excelDataArr, year);
};

// 예시
run('sample_data.xlsx', 'sample.pdf', '2025');

// run('triple_list.xlsx', '3부문통합_위촉장.pdf', '2025');
// run('YD_list.xlsx', 'YD_위촉장.pdf', '2025');
// run('KD_list.xlsx', 'KD_위촉장.pdf', '2025');
