const userTypeDefs = `#graphql
  type Address {
    id: ID!
    address: String
    address_1: String
    pincode: String
    state_id: Int
    district_id: Int
    user_id: Int
    user: User
}

  type User {
    id: ID!
    name: String!
    email: String
    products: [Product] # Relationship with Product
    
  }
  type UserWithAddress{
    id: ID!
    name: String!
    email: String
    products: [Product] # Relationship with Product
    addresses: [Address]  # Relationship with address
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
