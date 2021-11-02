import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";

import express from "express";
import "express-async-errors";

import { graphqlHTTP } from "express-graphql";

import { schema, resolver } from "./schema/schema";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true,
  })
);

const tmp = path.join(__dirname, "../../frontend/build");
const viewsDir = express.static(tmp);
app.use(viewsDir);

export default app;
