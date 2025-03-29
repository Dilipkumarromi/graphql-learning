const productTypeDefs = `#graphql
  type Product {
    id: ID!
    name: String!
    price: Float
    user: User # Relationship with User
  }

  type Query {
    getProducts: [Product]
    getProduct(id: ID!): Product
  }

  type Mutation {
    createProduct(name: String!, price: Float, userId: ID!): Product
  }
`;

export default productTypeDefs;
