console.log('Hello GraphQL');
import {
    GraphQLServer
} from 'graphql-yoga';

// Scalar Types - String, Boolean, Int, Float, ID.


// Type Definitions ( schema )
const typeDefs = `
    type Query {
        me: User!
        posts: Posts!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Posts {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`;

// Resolvers
const resolvers = {
    Query: {
        me() {
            return {
                id: '05x23y7',
                name: 'Paul',
                email: 'someemail@mail.io',
            }
        },

        posts() {
            return {
                id: 'unId742x78',
                title: 'How to ...',
                body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quia blanditiis, tempora quam impedit voluptates dolorem suscipit sit praesentium molestias.',
                published: true
            }
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log('Server is running!');
});