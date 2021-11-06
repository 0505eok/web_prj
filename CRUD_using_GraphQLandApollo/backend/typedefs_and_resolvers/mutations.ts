import { gql } from "apollo-server-express";
const typeDefs = gql`
  type Mutation {
    create(
      title: String
      contents: String
      author: String
      category: String
    ): Create

    update(
      id: Int
      title: String
      contents: String
      author: String
      category: String
    ): Update
  }
`;

export default typeDefs;
