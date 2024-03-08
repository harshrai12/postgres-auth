// App.js

import React from 'react';
import UserList from './components/UserList.jsx';
import UserForm from './components/UserForm.jsx';
import  { useState} from 'react';
 
function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  return (
    <div>
      <h1>User Management App</h1>
     
      <UserForm  users={users}
      setUsers={setUsers}
      editingUser={editingUser}
      setEditingUser={setEditingUser}  />
      <UserList users={users} setUsers={setUsers} setEditingUser={setEditingUser} />
    </div>
  );
}

export default App;

