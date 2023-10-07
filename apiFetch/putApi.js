fetch('https://jsonplaceholder.typicode.com/posts/2', {
  method: 'PUT',
  body: JSON.stringify({
    title: 'foosss',
    body: 'bafsdfsdr',
    userId: 15345,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));