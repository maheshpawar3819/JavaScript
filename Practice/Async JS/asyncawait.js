function getnum() {
  return new Promise((resolve, reject) => {
    resolve(console.log("resolve"));
    reject(console.log("reject"));
  })
}

async function demo() {
  await getnum();
  await getnum();
  await getnum();
}
