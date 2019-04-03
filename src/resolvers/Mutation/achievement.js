const { getUserId } = require('../../utils')

const achievement = {
  async createAchievement(parent, { title, description }, context) {
    const userId = getUserId(context)
    return context.prisma.createAchievement({
      title,
      description,
      createdBy: { connect: { id: userId } },
    })
  },

  async deleteAchievement(parent, { id }, context) {
    const userId = getUserId(context)
    const achievementExists = await context.prisma.$exists.achievement({
      id,
      author: { id: userId },
    })
    if (!achievementExists) {
      throw new Error(`Achievement not found or you're not the creator`)
    }

    return context.prisma.deleteAchievement({ id })
  },
}

module.exports = { achievement }
