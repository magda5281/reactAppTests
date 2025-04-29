import React from 'react';
import { useState, useEffect } from 'react';
import { fetchData } from '../utils/services';
function TestAPICalls() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setUsers(data);
    });
  }, []);
  return (
    <div style={{ padding: '10px' }}>
      <h3>Test API Calls</h3>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default TestAPICalls;
