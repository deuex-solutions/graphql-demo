const express = require('express');
import { ApolloServer } from 'apollo-server-express';
import { makeSchema } from 'nexus';
import { addMockFunctionsToSchema } from 'graphql-tools';

import * as types from "./schemas";

const faker = require('faker');

const schema = makeSchema({
    types,
    outputs: {
        schema: __dirname + '/generated/schema.graphql',
        typegen: __dirname + '/generated/typings.js'
    }
});

const mocks = {
    DateTime: () => faker.date.past(),
    JSON: () => "{key: 'value', 'meta': '" + faker.lorem.word() + "' }",
    URL: () => faker.internet.url(),
    String: () => faker.lorem.words()
}

addMockFunctionsToSchema({ schema, mocks });

const server = new ApolloServer({ schema });
const app = express();
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});