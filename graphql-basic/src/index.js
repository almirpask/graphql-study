import {
  GraphQLServer
} from 'graphql-yoga'

//Type definition (schema)
const typeDefs = `
  type Query {
    greeting(name: String, position: String): String!
    id: ID!
    name: String!
    age: Int!
    employed: Boolean!
    gpa: Float
    me: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }
`

//Resolvers

const resolvers = {
  Query: {
    greeting(parent, args, ctx, info) {
      if (args.name && args.position){
        return `Hello ${args.name} you are my favorite ${args.position}`
      }
      return 'Hello'
      
    },
    id() {
      return 'abc123'
    },
    name() {
      return 'Almir'
    },
    age() {
      return '23'
    },
    employed() {
      return true
    },
    gpa() {
      return null
    },
    me() {
      return {
        id: '123',
        name: 'Mike',
        email: 'mike@email.com',
        age: '33'
      }
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(()=> {
  console.log('server up!')
})