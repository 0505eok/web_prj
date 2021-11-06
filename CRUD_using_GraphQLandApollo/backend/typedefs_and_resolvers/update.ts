import { gql } from "apollo-server-express";
import { pool } from "../connection";

const update_typeDefs = gql`
  type Update {
    id: Int
    title: String
    contents: String
    author: String
    category: String
  }
`;

const update_resolvers = {
  Mutation: {
    update: async (parent: any, args: any) => {
      await pool.query(
        `update post set title='${args.title}', contents='${args.contents}',author='${args.author}',category='${args.category}' where id=${args.id}`
      );
      return args;
    },
  },
};

export { update_typeDefs, update_resolvers };
