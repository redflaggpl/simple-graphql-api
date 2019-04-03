const { getUserId } = require('../../utils')

const badge = {
  async createBadge(parent, { title, description, tags, givenTo }, context) {
    const userId = getUserId(context)
    return context.prisma.createBadge({
      title,
      description,
      createdBy: { connect: { id: userId } },
      givenTo: { connect: { id: givenTo } },
      tags,
    })
  },

  async deleteBadge(parent, { id }, context) {
    const userId = getUserId(context)
    const badgeExists = await context.prisma.$exists.badge({
      id,
      author: { id: userId },
    })
    if (!badgeExists) {
      throw new Error(`Badge not found or you're not the creator`)
    }

    return context.prisma.deleteBadge({ id })
  },
}

module.exports = { badge }
