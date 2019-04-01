import { ApolloServer, gql } from 'apollo-server'
import { prisma } from './generated/prisma-client'

const resolvers = {
	Mutation: {
		// signup: () => signup(),
		// login: () => login()
	}
}

const server = new ApolloServer({
	typeDefs: './src/schema.graphql',
	resolvers,
	context: request => ({
		...request,
		prisma
	})
})

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`)
})
