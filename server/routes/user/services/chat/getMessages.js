import { Connection, User, Message } from '@database'

import utils from '@utils'

const getMessages = async (req, res, next) => {
    try {
        await Connection.transaction(async transaction => {
            const { id, name } = req.user
            const { limit, offset } = req.body
            const messages = await Message.findAll({
                limit,
                offset,
                order: [['id', 'DESC']],
                include: [
                    {
                        model: User,
                        attributes: ['name']
                    }
                ],
                transaction
            }).then(
                async messages =>
                    await Promise.all(
                        messages
                            .sort((a, b) => a.id - b.id)
                            .map(async message => {
                                const readByIds = message.readBy.split(',').filter(v => v)
                                if (!readByIds.includes(id.toString())) {
                                    readByIds.push(id)
                                }
                                await message.update({
                                    readBy: readByIds.join(',')
                                })
                                return {
                                    ...message.dataValues,
                                    userName: message.user.name
                                }
                            })
                    )
            )
            res.send({
                messages,
                userId: id,
                userName: name
            })
        })
    } catch (error) {
        next(error)
    }
}

export const validation = () => [
    utils.validator.validateInteger('limit'),
    utils.validator.validateInteger('offset')
]

export default getMessages
