process.on('exit', (code) => {
  console.log(`Exit with code:${code}`);
});

process.on('uncaughtException', (err) => {
  console.error(err);
  // Stuff
  process.exit(1);
});

process.stdin.resume();
console.lemon();
