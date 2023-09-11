// userManagement.js

// Sample data for users
let users = [
    {
        id: 1,
        username: 'JohnDoe',
        email: 'john@example.com',
        role: 'Admin'
    },
    {
        id: 2,
        username: 'JaneDoe',
        email: 'jane@example.com',
        role: 'User'
    },
    // Add more users as needed
];

// Function to display users in the table
function displayUsers() {
    let userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = '';

    for(let i = 0; i < users.length; i++) {
        let user = users[i];

        let row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${user.id}</th>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button class="btn btn-primary" onclick="editUser(${user.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;

        userTableBody.appendChild(row);
    }
}

// Function to edit a user
function editUser(id) {
    // Find the user with the given id
    let user = users.find((user) => user.id === id);

    if(user) {
        // If user found, populate the form fields with user data
        // Assuming there are form fields with ids 'username', 'email', and 'role'
        document.getElementById('username').value = user.username;
        document.getElementById('email').value = user.email;
        document.getElementById('role').value = user.role;
    }
}

// Function to delete a user
function deleteUser(id) {
    // Find the index of the user with the given id
    let index = users.findIndex((user) => user.id === id);

    if(index !== -1) {
        // If user found, remove it from the users array
        users.splice(index, 1);

        // Refresh the table to reflect the changes
        displayUsers();
    }
}

// Call the displayUsers function when the page loads
window.onload = displayUsers;
