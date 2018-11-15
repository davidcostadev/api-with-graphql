const { buildSchema } = require('graphql');

// id: number
// name: string
// isCompleted: boolean

module.exports =  buildSchema(`
  type Tasks {
    id: ID,
    name: String,
    isCompleted: Boolean,
  }
`);
