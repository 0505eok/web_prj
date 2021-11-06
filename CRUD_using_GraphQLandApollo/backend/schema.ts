import queries from "./typedefs_and_resolvers/queries";
import mutations from "./typedefs_and_resolvers/mutations";
import { test_typeDefs, test_resolvers } from "./typedefs_and_resolvers/test";
import { read_typeDefs, read_resolvers } from "./typedefs_and_resolvers/read";
import {
  create_typeDefs,
  create_resolvers,
} from "./typedefs_and_resolvers/create";
import {
  update_typeDefs,
  update_resolvers,
} from "./typedefs_and_resolvers/update";
import {
  delete_typeDefs,
  delete_resolvers,
} from "./typedefs_and_resolvers/delete";

import { crud_typeDefs, crud_resolvers } from "./typedefs_and_resolvers/crud";

/*const typeDefs = [
  queries,
  mutations,
  test_typeDefs,
  read_typeDefs,
  create_typeDefs,
  update_typeDefs,
  delete_typeDefs,
];
const resolvers = [
  test_resolvers,
  read_resolvers,
  create_resolvers,
  update_resolvers,
  delete_resolvers,
];*/
const typeDefs = crud_typeDefs;
const resolvers = crud_resolvers;

export { typeDefs, resolvers };
