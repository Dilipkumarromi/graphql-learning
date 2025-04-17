import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from '@apollo/server';
import express from "express";
import bodyParser from "body-parser";
import { schema } from './graphql/schema';
require('dotenv').config()
const secretKey=process.env.SECRET_KEY
const jwt = require('jsonwebtoken'); // JWT for token handling
const app = express();
app.get("/",(req:any,res:any)=>{
    res.send({
        status:200,
        message:'Welcome rest api'
    })
})
  // Unauthorized middleware - for entire api
  // app.use((req:any, res, next) => {
  //   const token = req.headers.authorization?.split(' ')[1];
  //   if (!token) {
  //     return res.status(401).send('Unauthorized: No token provided');
  //   }

  //   try {
  //     req.user = jwt.verify(token, secretKey); // Verify token and attach user info
  //     next(); // Proceed to next middleware or resolver
  //   } catch (error:any) {
  //     console.log("Auth error",error)
  //     return res.status(401).send('Unauthorized: Invalid token');
  //   }
  // });
const server = new ApolloServer(schema);
// Start the server and integrate it with Express
const startServer = async () => {
 
  // Apply JSON middleware before Apollo Server middleware
  app.use(express.json());
  await server.start();
  // app.use("/graphql", bodyParser.json(), expressMiddleware(server));
  app.use("/graphql", bodyParser.json(), expressMiddleware(server, {
    context: async ({ req }) => {
      // Extract token from headers
      const token = req.headers.authorization || '';
      return { token }; // Return custom context
    },
  }));

  app.listen(4001, () => {
    console.log("🚀 Server ready at http://localhost:4001/graphql");
  });
};

startServer();
