import path from 'path';

import readExcel from './excelRead/excelRead.js';
import splitPdf from './splitPdf/splitPdf.js';
import { filePath, projectPath } from './utils/pathConfig.js';

const run = async (pdfName) => {
  /// 1. excel을 배열 데이터로 받아
  const excelDataArr = readExcel('data.xls');
  // console.log(yo);
  // 2. splitPdf에 배열을 넣는다

  //   console.log(yo);

  // 'C:/Users/hoope/Desktop/script2/pdf/위촉장_OOO_388건.pdf'

  const pdfFilePath = filePath(path.join(projectPath, 'pdf'), pdfName);

  //   console.log(pdfFilePath);
  await splitPdf(pdfFilePath, excelDataArr);
};

run('채용 공고문.pdf');
