import queries from "./typedefs_and_resolvers/queries";
import mutations from "./typedefs_and_resolvers/mutations";
import { test_typeDefs, test_resolvers } from "./typedefs_and_resolvers/test";
import { read_typeDefs, read_resolvers } from "./typedefs_and_resolvers/read";
import {
  create_typeDefs,
  create_resolvers,
} from "./typedefs_and_resolvers/create";

const typeDefs = [
  queries,
  mutations,
  test_typeDefs,
  read_typeDefs,
  create_typeDefs,
];
const resolvers = [test_resolvers, read_resolvers, create_resolvers];

export { typeDefs, resolvers };
