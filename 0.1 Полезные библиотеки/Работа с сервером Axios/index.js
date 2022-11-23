axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.data)
    .then(data => console.log(data))