export default function game21Logic(level, num) {
  if ((level === 2 || level === 3) && num >= 9 && num < 16 && num !== 12) {
    if (num < 12) {
      return 12;
    } else if (num >= 13 && num < 16) {
      return 16;
    }
  } else if (level === 3 && num < 8 && num >= 5) {
    return 8;
  } else if (num > 16 && num < 20) {
    return 20;
  } else {
    const newNum = Math.ceil(Math.random() * 3);
    if (newNum === 0) return 1;
    else return newNum + num;
  }
}
