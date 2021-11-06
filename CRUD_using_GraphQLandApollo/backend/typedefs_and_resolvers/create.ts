import { gql } from "apollo-server-express";
import { pool } from "../connection";

const create_typeDefs = gql`
  type Create {
    title: String
    contents: String
    author: String
    category: String
  }
`;

const create_resolvers = {
  Mutation: {
    create: async (parent: any, args: any) => {
      await pool.query(
        `insert into post(title,contents,author,category) values('${args.title}','${args.contents}','${args.author}','${args.category}')`
      );
      return args;
    },
  },
};

export { create_typeDefs, create_resolvers };
