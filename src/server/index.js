import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
    type Customer { 
        fullname : String
    }
    type Query { 
        customers : [Customer]
    }
`

const resolvers = {
    Query : {
        customers : () => {
            customers
        }
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers    
});
  
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
  
console.log(`🚀  Server ready at: ${url}`);