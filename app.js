const items = [ Promise.resolve(1), Promise.resolve(2), Promise.resolve(3) ];

async function fnWithAsyncLoop() {
  // for async (const item of items)
  for (const item of await Promise.all(items)) {
    const result = item;
    console.log(result);
  };
  
  console.log('Done!');
}

fnWithAsyncLoop();