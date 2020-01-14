const sentence = "hello there from lighthouse labs";

let x = 500;

const newTime = (sentence.length + 1) * 500;

for (const char of sentence) {
  x += 500;
  setTimeout(() => {
    process.stdout.write(char);
    // print the char here
  }, x) // <= 1s delay to make it noticeable. Can dial it down later.
}

setTimeout(() => {
  process.stdout.write('\n');
}, newTime)
