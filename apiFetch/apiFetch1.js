// way 1
async function fApi() {
  const jsonData = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  const jsDataa1 = await jsonData.json();

  console.log(jsDataa1);
}
// fApi()

// way 2

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));
