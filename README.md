# 1 mutation for -> Create,Update,Delete
# Apollo Server mutation
# mutation CreateUpdateDelete  ->   Customizable -> Mutations:
 mutation($name: String!,$email:String){  
 createUser(name: $name,email: $email) {
    name,
    email
  }
}
# parameter ->  $name: String!,$email:String -> Variable Declaration ($name, $email):
# handle parameter -> name: $name,email: $email 
# Precise Data Retrieval: -> {name,email}"# retrieve  data 
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# 2 GET DATA WITH PARAMETER
  query($getUserId: ID!){
  getUser(id: $getUserId) {
    id,
    name
  }
}
# 3 Without parameter
  query{
  getUsers {
    id,
    name
  }
}
  

# create mutation
mutation($firstName: String!, $lastName: String!, $email: String!, $mobile: String!, $dob: String!, $isActive: Boolean!){
  addUserMaster(first_name: $firstName, last_name: $lastName, email: $email, mobile: $mobile, dob: $dob, is_active: $isActive) {
    first_name
  }
}
# update mutation

# nodejs running port kill
npx kill-port 8081


# Adjusted Schema for One-to-Many Relationship
type Address {
  id: ID!
  address: String!
  address_1: String!
  pincode: String!
  state_id: Int!
  district_id: Int!
  user_id: Int!
  user: UserWithAddress! # Back-reference to the user
}

type UserWithAddress {
  id: ID!
  first_name: String!
  last_name: String!
  email: String!
  addresses: [Address!]! # Change to a list for multiple addresses
}

type Query {
  getUserWithAddress: [UserWithAddress]! # Fetch all users with addresses
}
 # resolver one to many
 UserWithAddress: {
  addresses: (parent, args, context) => {
    const user= await db.Address.findAll({ where: { user_id: parent.id } });

     const final = JSON.parse(JSON.stringify(users, null, 2));
         // Ensure 'addresses' is always an array
     const processedUsers = users.map((user:any) => ({
    ...user.toJSON(),
    addresses: [user.addresses] , // Ensure 'addresses' is always an array, // Return an empty array if no addresses found
    }));
  }
}
 
# Adjusted Schema for One-to-One Relationship
type Address {
  id: ID!
  address: String!
  address_1: String!
  pincode: String!
  state_id: Int!
  district_id: Int!
  user_id: Int!
  user: UserWithAddress! # Back-reference to the user
}

type UserWithAddress {
  id: ID!
  first_name: String!
  last_name: String!
  email: String!
  address: Address! # Change to a single object
}

type Query {
  getUserWithAddress: [UserWithAddress]! # Fetch all users with their single address
}

# one to one resolvers
UserWithAddress: {
  address: (parent, args, context) => {
    return context.db.Address.findOne({ where: { user_id: parent.id } });
  }
}


# Import Note for getting data
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
  addresses: [Address]! # Relationship with multiple addresses required one to many other wise not getting join data 
}
