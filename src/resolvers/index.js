const { Query } = require('./Query')
const { auth } = require('./Mutation/auth')
const { post } = require('./Mutation/post')
const { achievement } = require('./Mutation/achievement')
const { badge } = require('./Mutation/badge')
const { Subscription } = require('./Subscription')
const { User } = require('./User')
const { Post } = require('./Post')
const { Achievement } = require('./Achievement')
const { Badge } = require('./Badge')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...achievement,
    ...badge,
  },
  Subscription,
  User,
  Post,
  Achievement,
  Badge,
}
