const Badge = {
  createdBy: ({ id }, args, context) => {
    return context.prisma.badge({ id }).createdBy()
  },
  givenTo: ({ id }, args, context) => {
    return context.prisma.badge({ id }).givenTo()
  },
 }

module.exports = {
  Badge,
}
