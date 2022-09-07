import { roleAuthorization } from 'middlewares'

import type { QueryResolvers } from 'types/graphql'

export const borrowedBooks: QueryResolvers['borrowedBooks'] = async (_, __, context) => {
   roleAuthorization(context)
   return context.req.user.user.getBooks({ where: { price: null } })
}
