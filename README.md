# mutation for -> Create,Update,Delete
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
# Precise Data Retrieval: -> {name,email}"# graphql-learning" 
