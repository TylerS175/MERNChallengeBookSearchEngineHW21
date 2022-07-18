import { gql } from '@apollo/client';

export const QUERY_ME = gpl`
{
    me {
      _id
      username
      email
      email
      bookCount
      savedBooks {
        bookId
        authors 
        description
        title
        image
        link
      }
    }
}
`