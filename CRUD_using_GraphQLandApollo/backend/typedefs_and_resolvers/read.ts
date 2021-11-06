import { gql } from "apollo-server-express";
import { pool } from "../connection";

const read_typeDefs = gql`
  type Read {
    id: Int
    title: String
    contents: String
    author: String
    category: String
  }
`;

const read_resolvers = {
  Query: {
    read: async () => {
      const [ret] = await pool.query("select * from post");
      return JSON.parse(JSON.stringify(ret));
    },
  },
};

export { read_typeDefs, read_resolvers };
