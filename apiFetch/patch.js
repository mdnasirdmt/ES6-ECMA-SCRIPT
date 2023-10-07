fetch('https://jsonplaceholder.typicode.com/posts/2', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'fookra',
    body: 'barood',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));