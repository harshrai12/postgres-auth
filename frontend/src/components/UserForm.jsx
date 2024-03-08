// UserForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ users, setUsers, editingUser, setEditingUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingUser) {
      setUsername(editingUser.username);
      setEmail(editingUser.email);
    }
  }, [editingUser]);

  const handleCreateUser = () => {
    const userObj = {
      username,
      email
    };

    if (editingUser) {
      // Update the user on the server
      axios.put(`http://localhost:3000/users/${editingUser.id}`, { username, email })
        .then(response => console.log('User updated:', response.data))
        .catch(error => console.error('Error updating user:', error));
      setEditingUser(null);
    } else {
      // Create a new user on the server
      axios.post('http://localhost:3000/users', { username, email })
        .then(response => console.log('User created:', response.data))
        .catch(error => console.error('Error creating user:', error));
    }

    setUsers([...users, userObj]);
    setUsername('');
    setEmail('');
  };

  return (
    <div>
      <h2>{editingUser ? 'Edit User' : 'Create User'}</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCreateUser}>
        {editingUser ? 'Update User' : 'Create User'}
      </button>
    </div>
  );
};

export default UserForm;
