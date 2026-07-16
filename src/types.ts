export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AddUserResponse {
  id: string;
  name: string;
  email: string;
}

export interface Query {
  getUsers: User[];
}

export interface Mutation {
  addUser(name: string, email: string): AddUserResponse;
}