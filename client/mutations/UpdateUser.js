import gql from 'graphql-tag';

export default gql`
  mutation updateUser($id: ID!, $email: String, $name: String) {
    updateUser(id: $id, email: $email, name: $name) {
      id
      name
      email,
    }
  }
`;
