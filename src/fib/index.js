export function isFibonacci(n) {
  let a = 0,
    b = 1;
  while (a < n) {
    let temp = a;
    a = b;
    b = temp + b;
  }
  return a === n;
}
