const sentence = "hello there from lighthouse labs";
let delayTime = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);// print the char here
  }, delayTime); // <= 1s delay to make it noticeable. Can dial it down later.
  delayTime += 50;
}
setTimeout(() => console.log(""),delayTime);