import express from "express";
import { ApolloServer } from "apollo-server-express";
import { pool } from "./connection";
import { typeDefs, resolvers } from "./schema";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  server.applyMiddleware({
    app,
    path: "/graphql",
  });
});

const port = 4000;
app.listen(port, async () => {
  const res = await pool.query("select * from post");
  console.log(res);
  console.log("Express server started on port: " + port);
});
