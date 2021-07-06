export function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export function unixtime() {
  return Math.floor(Date.now() / 1000);
}
