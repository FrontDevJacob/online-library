import { Message, User } from 'database'

import { integer } from 'shared'

import { yupValidation } from 'middlewares'

import { updateReadByProperty } from 'helpers'

import type { ProtectedRoute } from 'types/express'

export const getMessages: ProtectedRoute = [
   yupValidation({
      body: {
         limit: integer,
         offset: integer,
      },
   }),
   async (req, res, next) => {
      try {
         const { id, name } = req.user

         const { limit, offset } = req.body

         const messages = await Message.findAll({
            limit,
            offset,
            order: [['id', 'DESC']],
            include: [
               {
                  model: User,
                  attributes: ['name'],
               },
            ],
         }).then(messages => messages.sort((a, b) => a.id - b.id))

         const { updatedMessages } = await updateReadByProperty(id, messages)

         const messagesWithUserNames = updatedMessages.map(message => ({
            ...message.get({ plain: true }),
            userName: message.user?.name,
         }))

         res.send({
            messages: messagesWithUserNames,
            userId: id,
            userName: name,
         })
      } catch (error) {
         next(error)
      }
   },
]
