const Achievement = {
  createdBy: ({ id }, args, context) => {
    return context.prisma.achievement({ id }).createdBy()
  },
}

module.exports = {
  Achievement,
}
