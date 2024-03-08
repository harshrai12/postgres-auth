// UserList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';


const UserList = ({ users, setUsers,setEditingUser }) => {
  

  useEffect(() => {
    // Fetch all users from the server
    axios.get('http://localhost:3000/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []); // Empty dependency array to run the effect only once

  const handleDeleteUser = async (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    try {
      // Delete a user on the server
      await axios.delete(`http://localhost:3000/users/${userId}`);
      // Update the users list after successful deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} - {user.email}
            <button onClick={() => handleEditUser(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default UserList;
