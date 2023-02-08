const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data
var books = [
  { name: "Name of the Wind", genre: "Fantasy", id: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];

const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "xyz",
  fields: {
    codeimprove: {
      type: new graphql.GraphQLList(UserType),
      // args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return books;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
