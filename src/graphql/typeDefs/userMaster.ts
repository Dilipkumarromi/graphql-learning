
const userMasterTypes = `#graphql
type UserMaster {
    id: Int
    first_name: String
    last_name: String
    email: String
    mobile: String
    dob: String
    education: String
    is_active: Boolean
  }
type Address {
  id: ID!
  address: String!
  address_1: String!
  pincode: String!
  state_id: Int!
  district_id: Int!
  user_id: Int!
  user: User!
}

type UserWithAddress {
  id: ID!
  first_name: String!
  last_name: String!
  email: String!
  addresses: [Address]! # Relationship with multiple addresses
}
type UserWithOneAddress {
  id: ID!
  first_name: String!
  last_name: String!
  email: String!
  addresses: Address! # One to One Relationship
}
  type Query{
    getUserMasters:[UserMaster]
    getUserMaster(id: ID!): UserMaster
    getUserWithAddress:[UserWithAddress] # for relationship one to many user-> address
    getUserWithOneAddress:[UserWithOneAddress] # for relationship one to one 
  }

  type Mutation{
    addUserMaster(
      first_name: String!,
      last_name: String,
      email: String,
      mobile: String,
      dob: String,
      education: String,
      is_active: Boolean
    ): UserMaster,
    updateUserMaster(id: Int!, first_name: String!, email: String!): UserMaster,
    deleteUserMaster(id:Int!):UserMaster
  }
`;
export default userMasterTypes;
