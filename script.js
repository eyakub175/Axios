axios.post('https://jsonplaceholder.typicode.com/posts', {

    name: 'Joan',
    age: 30
})

.then(respone => {
    console.log('Data sent successfully:', response.data);
})

.catch(error => {
    console.error('Error sending data:', error);
});