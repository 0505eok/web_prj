import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    test: [Test]
  }
`;

export default typeDefs;
