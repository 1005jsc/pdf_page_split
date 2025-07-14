import path from 'path';

// 이 프로젝트의 절대 경로

// 예) '/Users/jaesincho/Desktop/coding/kidp/pdf_page_split'

export const projectPath = path.dirname(process.argv[1]);

// 파일의 파일경로 만들어주기

export const filePath = (location, fileName) => {
  return path.join(location, fileName);
};
