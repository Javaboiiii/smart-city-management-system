import mongoose from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from '../Graphql/typeDefs.js';
import resolvers from '../Graphql/resolvers.js';

mongoose.connect('mongodb://localhost:27017/smart-city-management');

const db = mongoose.connection 

db.on('error', (err) => {
  console.log("Error on Mongodb", err)
})

db.on('open', () => {
  console.log('Connected to the Mongodb')
})

db.on('disconnected', () => {
  console.log('Disconnected from the Mongodb')
})


const server = new ApolloServer({
    typeDefs,
    resolvers    
});
  
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
  
console.log(`🚀  Server ready at: ${url}`);