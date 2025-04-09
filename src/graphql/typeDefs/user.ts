const userTypeDefs = `#graphql

  type User {
    id: ID!
    name: String!
    email: String
    products: [Product] # Relationship with Product
    
  }
  
  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String): User
  }
`;

export default userTypeDefs;
