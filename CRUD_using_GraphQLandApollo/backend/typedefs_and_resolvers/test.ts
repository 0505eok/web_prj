import { gql } from "apollo-server-express";

const test_typeDefs = gql`
  type Test {
    id: String
  }
`;

const test_resolvers = {
  Query: {
    test: () => {
      return [{ id: "asf" }];
    },
  },
};

export { test_typeDefs, test_resolvers };
