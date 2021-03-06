import moment from 'moment'
import { Vote, Topic } from '@prisma/client'

type TopicWithVotes = Topic & { votes: Vote[] }

const extractVotes = (votes: Vote[]) => {
  const ups = votes.filter((vote) => vote.type === 'UPVOTE').length
  const downs = votes.filter((vote) => vote.type === 'DOWNVOTE').length
  return [ups, downs]
}

export const getHotScore = (topic: TopicWithVotes) => {
  const { log10, max, abs, round } = Math
  const [ups, downs] = extractVotes(topic.votes)
  const score = ups - downs
  const order = log10(max(abs(score), 1))
  const sign = score > 0 ? 1 : score < 0 ? -1 : 0
  const unix = moment(topic.createdAt).unix()

  return round(order + sign * unix)
}

export const getTopScore = (topic: TopicWithVotes) => {
  const [ups, downs] = extractVotes(topic.votes)
  const score = ups - downs
  return score
}

// export const sortTopics = (sortType: SortType, votes: VoteCollection[]) => {
//   // TODO: acc must have a certain type
//   const reduced = votes.reduce((acc: any, current) => {
//     if (current.topic.id in acc) {
//       acc[current.topic.id].push({ id: current.id, type: current.type })
//     } else {
//       acc[current.topic.id] = [{ id: current.id, type: current.type }]
//     }
//     return acc
//   }, {})

//   const sorted = votes
//     .sort((a, b) => {
//       const aVotes: Vote[] = reduced[a.topic.id]
//       const bVotes: Vote[] = reduced[b.topic.id]
//       const aScore =
//         sortType === 'HOT'
//           ? getHotScore(aVotes, a.topic)
//           : getTopScore(aVotes, a.topic)
//       const bScore =
//         sortType === 'HOT'
//           ? getHotScore(bVotes, b.topic)
//           : getTopScore(bVotes, b.topic)
//       return aScore > bScore ? -1 : aScore < bScore ? 1 : 0
//     })
//     .map((vote) => vote.topic)

//   // Convert Objects to strings (To ease the removal)
//   const unique = new Set(sorted.map((e) => JSON.stringify(e)))

//   // Converting back to Objects
//   const result = Array.from(unique).map((e) => JSON.parse(e))

//   return result
// }
