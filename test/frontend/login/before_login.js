document.addEventListener('DOMContentLoaded', () => {
    const setPerson = document.querySelector('.login-info header');
    const typeUser = document.querySelector('.type-user');
    const userTypes = typeUser.getElementsByTagName('p');

    for (let i = 0; i < userTypes.length; i++) {
        userTypes[i].addEventListener('click', () => {
            setPerson.textContent = `Login as ${userTypes[i].textContent}`;
        });
    }

    const loginForm = document.querySelector('.login-info');
    const message = document.createElement('p');
    loginForm.appendChild(message);
    
//     loginForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const username = loginForm.querySelector('input[type="text"]').value;
//         const password = loginForm.querySelector('input.pass').value;
        
//         // Fetch the password.json file
//         fetch('http://127.0.0.1:8081/test/frontend/data/password.json') // Update the path as needed
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(users => {
//                 const validUser = users.find(user => user.username === username && user.password === password);
                
//                 if (validUser) {
//                     message.textContent = `Login successful! Redirecting...`;
//                     message.style.color = 'green';

//                     // Redirect based on role
//                     if (validUser.role === 'Employee') {
//                         window.location.href = 'employee.html';
//                     } else if (validUser.role === 'HR') {
//                         window.location.href = 'hr.html';
//                     } else if (validUser.role === 'Admin') {
//                         window.location.href = 'admin.html';
//                     }
//                 } else {
//                     message.textContent = 'Invalid username or password.';
//                     message.style.color = 'red';
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching the JSON file:', error);
//                 message.textContent = 'An error occurred. Please try again.';
//                 message.style.color = 'red';
//             });
//     });
// });


    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input.pass').value;
        
        // Hardcoded user check
        const validUser = {
            username: 'pranav',
            password: 'pranav',
            role: 'Employee'
        };

        if (username === validUser.username && password === validUser.password) {
            message.textContent = `Login successful! Redirecting...`;
            message.style.color = 'green';

            // Redirect based on role
            if (validUser.role === 'Employee') {
                window.location.href = 'employee.html';
            } else if (validUser.role === 'HR') {
                window.location.href = 'hr.html';
            } else if (validUser.role === 'Admin') {
                window.location.href = 'admin.html';
            }
        } else {
            message.textContent = 'Invalid username or password.';
            message.style.color = 'red';
        }
    });
});