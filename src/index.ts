import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import database from './utils/database';
import config from './config';

const startServer = async () => {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    })

    database();
    console.log(`Connected to DB`);

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    app.use((req, res) => {
        res.send("Hello from apollo server");
    });

    app.listen(config.port, () => {
        console.log(`Serving at port ${config.port}`);
    })
}
startServer();