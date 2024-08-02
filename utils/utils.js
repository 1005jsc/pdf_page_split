export const applyDebouncing = (millisecond, callback) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(callback());
    }, millisecond);
  });
};

export const numberToAlphabet = (num) => {
  let alphabet;

  if (typeof num !== 'number' || num < 1 || num > 26 * 27) {
    throw new Error('입력된 숫자는 1이상 701이하의 정수여야 합니다.');
  } else if (num <= 26) {
    alphabet = String.fromCharCode(64 + num);
  } else if (num > 26 || num < 26 * 26) {
    const front = Math.floor(num / 26);
    const back = num % 26;

    alphabet = String.fromCharCode(64 + front, 64 + back);

    // Z는 26, 그 다음의 숫자인 27인 경우 AA로 된다
    // 예) 28 -> 1, (28-26) = AB
    // 예2) 54 -> 54 = 26*2 + 2 -> (2,2)
  }

  // 26*27(702)이상일 경우는 안 됨

  // 'A'는 ASCII 코드에서 65를 나타냄. 숫자와 알파벳의 관계는 A:1, B:2, ..., Z:26임.

  return alphabet;
};
