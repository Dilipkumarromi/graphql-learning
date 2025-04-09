require('dotenv').config()
const secretKey=process.env.SECRET_KEY
console.log("secretKey",secretKey)
const jwt = require('jsonwebtoken');
const userResolvers = {
    Query: {
      getUsers: () => [
        { id: "1", name: "John Doe", email: "john@example.com", products: [] },
      ],
      getUser: (_: any, args: { id: string }) => {
        const token= jwt.sign({ id: args.id }, secretKey, { expiresIn: '1h' });
        return { id: args.id, name: "John Doe", email: "john@example.com", products: [],token };
      },
    },
    Mutation: {
      createUser: (_: any, args: { name: string; email: string }) => {
        return { id: "2", name: args.name, email: args.email, products: [] };
      },
    },
  };
  
  export default userResolvers;
  