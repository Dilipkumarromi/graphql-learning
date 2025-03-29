const userResolvers = {
    Query: {
      getUsers: () => [
        { id: "1", name: "John Doe", email: "john@example.com", products: [] },
      ],
      getUser: (_: any, args: { id: string }) => {
        return { id: args.id, name: "John Doe", email: "john@example.com", products: [] };
      },
    },
    Mutation: {
      createUser: (_: any, args: { name: string; email: string }) => {
        return { id: "2", name: args.name, email: args.email, products: [] };
      },
    },
  };
  
  export default userResolvers;
  