
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
  type Query{
    getUserMasters:[UserMaster]
    getUserMaster(id: ID!): UserMaster
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
    updateUserMaster(id: Int!, name: String!, email: String!): UserMaster
  }
`;
export default userMasterTypes;
