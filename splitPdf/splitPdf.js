import { PDFDocument } from 'pdf-lib';
import path from 'path';
import fs from 'fs';
import { filePath, projectPath } from '../utils/pathConfig.js';

async function splitPdf(pathToPdf, arr, year) {
  console.log('pathToPdf : ' + pathToPdf);
  const docmentAsBytes = await fs.promises.readFile(pathToPdf);

  // Load your PDFDocument
  const pdfDoc = await PDFDocument.load(docmentAsBytes);

  const numberOfPages = pdfDoc.getPages().length;
  // const numberOfPages = 29;
  for (let i = 0; i < numberOfPages; i++) {
    //   for (let i = 0; i < 2; i++) {
    // Create a new "sub" document
    const subDocument = await PDFDocument.create();
    // copy the page at current index
    const [copiedPage] = await subDocument.copyPages(pdfDoc, [i]);
    subDocument.addPage(copiedPage);
    const pdfBytes = await subDocument.save();

    // ../result에 저장시키기

    const resultPdfPathname = filePath(
      path.join(projectPath, 'result'),
      `${year} 위촉장_${arr[i].name}.pdf`
    );

    await writePdfBytesToFile(resultPdfPathname, pdfBytes);
  }
  console.log(numberOfPages);
}

function writePdfBytesToFile(fileName, pdfBytes) {
  return fs.promises.writeFile(fileName, pdfBytes);
}

export default splitPdf;
