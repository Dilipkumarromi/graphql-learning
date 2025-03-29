const productResolvers = {
    Query: {
      getProducts: () => [
        { id: "1", name: "Laptop", price: 1000.0, user: null },
      ],
      getProduct: (_: any, args: { id: string }) => {
        return { id: args.id, name: "Laptop", price: 1000.0, user: null };
      },
    },
    Mutation: {
      createProduct: (_: any, args: { name: string; price: number; userId: string }) => {
        return { id: "2", name: args.name, price: args.price, user: { id: args.userId } };
      },
    },
  };
  
  export default productResolvers;
  