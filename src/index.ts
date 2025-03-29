import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from '@apollo/server';
import express from "express";
import bodyParser from "body-parser";
import { schema } from './graphql/schema';
const app = express();
app.get("/",(req:any,res:any)=>{
    res.send({
        status:200,
        message:'Welcome rest api'
    })
})
const server = new ApolloServer(schema);
// Start the server and integrate it with Express
const startServer = async () => {
 
  // Apply JSON middleware before Apollo Server middleware
  app.use(express.json());
  await server.start();
  app.use("/graphql", bodyParser.json(), expressMiddleware(server));

  app.listen(4000, () => {
    console.log("🚀 Server ready at http://localhost:4000/graphql");
  });
};

startServer();
