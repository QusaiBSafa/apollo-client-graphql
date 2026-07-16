# Infrastructure Overview
This project consists of a React application using Apollo Client to connect to a GraphQL API.

## Data Models
- **User**: Represents a user with fields `id`, `name`, and `email`.

## API Design
- **Queries**:
  - `getUsers`: Fetches a list of users.

- **Mutations**:
  - `addUser`: Adds a new user with `name` and `email`.

## Key Decisions
- Using Apollo Client for state management and data fetching.
- Next.js for server-side rendering and easy routing.