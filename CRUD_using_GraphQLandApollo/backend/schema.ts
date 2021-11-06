import queries from "./typedefs_and_resolvers/queries";
import mutations from "./typedefs_and_resolvers/mutations";
import { test_typeDefs, test_resolvers } from "./typedefs_and_resolvers/test";

const typeDefs = [queries, test_typeDefs];
const resolvers = [test_resolvers];

export { typeDefs, resolvers };
