var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`)




const loggingMiddleware = (req, res, next) => {
  console.log("ip:", req.ip)
  next()
}

// The root provides a resolver function for each API endpoint
var root = {
  rollDice: ({ numDice, numSides }) => {
    var output = []
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)))
    }
    return output
  },
}

var app = express()
app.use(loggingMiddleware)
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)
PORT=5000
app.listen(PORT)
console.log("Running a GraphQL API server at localhost:"+PORT+"/graphql")