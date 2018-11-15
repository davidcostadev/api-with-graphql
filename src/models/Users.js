const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Tasks {
    id: ID,
    name: String,
  }
`);
