import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  buildSchema,
} from "graphql";
import axios from "axios";
//const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const schema = buildSchema(`
    type Query {
        user: [User]
        company: [Company]
    }

    type User {
        id: String
        firstName: String
        age: Int
    }

    type Company {
        id: String
        name: String
        description: String
    }
`);

const resolver = {
  user: async () => {
    const res = await axios.get("http://localhost:3001/users");
    return res.data;
  },
  company: async () => {
    return axios
      .get("http://localhost:3001/companies")
      .then((res: any) => res.data);
  },
};
/*const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const query = new GraphQLObjectType({
  name: "query",
  fields: {
    user: {
      type: UserType,
      resolve: async () => {
        const res = await axios.get("http://localhost:3001/users");
        console.log(res.data);
        return res.data;
      },
    },
    company: {
      type: CompanyType,
      resolve: () => {
        return axios
          .get("http://localhost:3001/companies")
          .then((res: any) => res.data);
      },
    },
  },
});

const schema = new GraphQLSchema({ query: query });*/
export { schema, resolver };
//export { schema };
