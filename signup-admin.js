const axios = require('axios');

console.log('Request started...');
axios.post('http://localhost:8700/api/v1/auth/signup', {
    email: "digrape07@gmail.com",
    password: "admin123FjghgnmkKl"
}).then(data => {
    console.log('Admin created succesfully! >>> ', data.data);
}).catch(err => {
    console.log('Couldnt create admin. Error: ', err);
});
