import queries from "./typedefs_and_resolvers/queries";
import mutations from "./typedefs_and_resolvers/mutations";
import { test_typeDefs, test_resolvers } from "./typedefs_and_resolvers/test";
import { read_typeDefs, read_resolvers } from "./typedefs_and_resolvers/read";

const typeDefs = [queries, test_typeDefs, read_typeDefs];
const resolvers = [test_resolvers, read_resolvers];

export { typeDefs, resolvers };
