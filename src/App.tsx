import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

const GET_USERS = gql`{
  getUsers {
    id
    name
    email
  }
}`;

const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  const [addUser] = useMutation(ADD_USER);

  const handleAddUser = async () => {
    await addUser({ variables: { name: 'John Doe', email: 'john@example.com' } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.getUsers.map((user: any) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default App;