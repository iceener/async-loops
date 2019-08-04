// Normal loop
const items = [1,2,3];
items.forEach(item => console.log(item));

// Async loop - bad
const items = [ Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
items.forEach(async (item) => {
  const result = await (item);
  console.log(result);
})
console.log('Done loop');

// Async loop - good
const items = [ Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
async function fnWithAsyncLoop() {
  for (const item of items) {
    console.log(await item);
  }
  console.log('Done loop!');
}
fnWithAsyncLoop();

// Async loop - good #2
async function fnWithAsyncLoop() {
  // for async (const item of items)
  for (const item of await Promise.all(items)) {
    const result = item;
    console.log(result);
  };

  console.log('Done!');
}

fnWithAsyncLoop();

