import { gql } from '@apollo/client';

//Login creations email, password, user 
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Ability to the add new users 
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Allowing to save books 
export const SAVE_BOOK = gql`
mutation saveBook($book: SavedBookInput!) {
    saveBook(book: $book) {
        username
        email
        bookCount
        savedBooks {
            authors
            description
            bookId
            image
            link
            title
        }
    }
}
`;

// Allows you to remove books 
export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        username
        email
        bookCount
        savedBooks {
            authors 
            description
            bookId
            image
            link
            title
        }
    }
}
`;
