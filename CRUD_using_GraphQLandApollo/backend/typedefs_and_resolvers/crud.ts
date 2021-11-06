import { gql } from "apollo-server-express";
import { pool } from "../connection";

const crud_typeDefs = gql`
  type Query {
    read: [Post]
  }

  type Mutation {
    create(
      title: String
      contents: String
      author: String
      category: String
    ): Post

    update(
      id: Int
      title: String
      contents: String
      author: String
      category: String
    ): Post

    delete(id: Int): [Post]
  }

  type Post {
    id: Int
    title: String
    contents: String
    author: String
    category: String
  }
`;

const crud_resolvers = {
  Query: {
    read: async () => {
      const [ret] = await pool.query("select * from post");
      return JSON.parse(JSON.stringify(ret));
    },
  },
  Mutation: {
    create: async (parent: any, args: any) => {
      await pool.query(
        `insert into post(title,contents,author,category) values('${args.title}','${args.contents}','${args.author}','${args.category}')`
      );
      return args;
    },

    update: async (parent: any, args: any) => {
      await pool.query(
        `update post set title='${args.title}', contents='${args.contents}',author='${args.author}',category='${args.category}' where id=${args.id}`
      );
      return args;
    },

    delete: async (parent: any, args: any) => {
      const [ret] = await pool.query(`select * from post where id=${args.id}`);
      await pool.query(`delete from post where id=${args.id}`);
      return JSON.parse(JSON.stringify(ret));
    },
  },
};

export { crud_typeDefs, crud_resolvers };
