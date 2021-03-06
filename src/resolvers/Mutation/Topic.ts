import { PrismaClient, TopicUpdateInput } from '@prisma/client'
// import { getUserId } from '../../utils'
// import { alphanumeric } from '../../utils/sanitizer'
import { getUserId, sanitizer, IFile, uploadImage } from '@utils'
export default {
  /**
   * This mutation is dedicated to enable active station members to post topics
   */
  createTopic: async (
    _parent: any,
    {
      data,
      image,
    }: {
      data: {
        title: string
        content: string
        station: number
      }
      image: IFile
    },
    { prisma, request }: { prisma: PrismaClient; request: any }
  ) => {
    const userId = getUserId(request)

    const [membership] = await prisma.membership.findMany({
      where: {
        userId,
        stationId: data.station,
        state: 'ACTIVE',
      },
    })

    if (!membership) throw new Error('Authorization Required')

    const identifier = sanitizer.alphanumeric(data.title, '_').toLowerCase()

    const [topicExist] = await prisma.topic.findMany({
      where: {
        stationId: data.station,
        identifier: identifier,
      },
    })

    if (topicExist) throw new Error('Topic title is used before')

    const imagePath = image ? await uploadImage(image, 'stations') : ''

    const topic = await prisma.topic.create({
      data: {
        title: data.title,
        identifier,
        content: data.content,
        image: imagePath,
        sealed: false,

        membership: {
          connect: {
            id: membership.id,
          },
        },

        user: {
          connect: {
            id: userId,
          },
        },

        station: {
          connect: {
            id: data.station,
          },
        },

        votes: {
          create: {
            user: {
              connect: {
                id: userId,
              },
            },
            membership: {
              connect: {
                id: membership.id,
              },
            },
            station: {
              connect: {
                id: data.station,
              },
            },
            type: 'UPVOTE',
          },
        },
      },
    })

    return topic
  },

  /**
   * This mutation is dedicated to enable users to update their own topics
   */
  updateTopic: async (
    _parent: any,
    {
      id,
      data,
      image,
    }: {
      id: number
      data: TopicUpdateInput
      image: IFile
    },
    { prisma, request }: { prisma: PrismaClient; request: any }
  ) => {
    const userId = getUserId(request)

    const [isAuthorized] = await prisma.topic.findMany({
      where: {
        id,
        membership: {
          userId,
          state: 'ACTIVE',
        },
      },
    })

    if (!isAuthorized) throw new Error('Authorization Required')

    if (typeof data.title === 'string') {
      const identifier = sanitizer.alphanumeric(data.title, '_').toLowerCase()

      const [isTaken] = await prisma.topic.findMany({
        where: {
          station: {
            topics: {
              some: {
                id,
              },
            },
          },
          identifier,
        },
      })
      if (isTaken !== undefined) throw new Error('Topic title is in use')
      else data.identifier = identifier
    }

    if (image) {
      const imagePath = await uploadImage(image, 'stations')
      data.image = imagePath
    } else {
      data.image = ''
    }

    const topic = await prisma.topic.update({
      where: { id },
      data,
    })

    return topic
  },

  /**
   * This mutation is dedicated to enable users to delete their topics
   */
  deleteTopic: async (
    _parent: any,
    { id }: { id: number },
    { prisma, request }: { prisma: PrismaClient; request: any }
  ) => {
    const userId = getUserId(request)

    const [isAuthorized] = await prisma.topic.findMany({
      where: {
        OR: [
          {
            id,
            membership: {
              userId,
              state: 'ACTIVE',
            },
          },
          {
            id,
            membership: {
              station: {
                memberships: {
                  some: {
                    userId,
                    role: {
                      in: ['FOUNDER', 'ADMIN'],
                    },
                  },
                },
              },
            },
          },
        ],
      },
    })

    if (!isAuthorized) throw new Error('Authorization Required')

    await prisma.comment.deleteMany({
      where: {
        topicId: id,
      },
    })

    await prisma.vote.deleteMany({
      where: {
        topicId: id,
      },
    })

    const topic = await prisma.topic.delete({ where: { id } })
    return topic
  },
}
