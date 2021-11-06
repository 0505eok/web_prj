import { gql } from "apollo-server-express";
import { pool } from "../connection";

const delete_typeDefs = gql`
  type Delete {
    id: Int
    title: String
    contents: String
    author: String
    category: String
  }
`;

const delete_resolvers = {
  Mutation: {
    delete: async (parent: any, args: any) => {
      const [ret] = await pool.query(`select * from post where id=${args.id}`);
      await pool.query(`delete from post where id=${args.id}`);
      return JSON.parse(JSON.stringify(ret));
    },
  },
};

export { delete_typeDefs, delete_resolvers };
