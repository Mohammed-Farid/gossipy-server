// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateComment {
  count: Int!
}

type AggregateMembership {
  count: Int!
}

type AggregateStation {
  count: Int!
}

type AggregateTopic {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Comment {
  id: ID!
  content: String!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  id: ID
  content: String!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  content_ASC
  content_DESC
}

type CommentPreviousValues {
  id: ID!
  content: String!
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  content: String
}

input CommentUpdateManyMutationInput {
  content: String
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Membership {
  id: ID!
  user: User!
  station: Station!
  topics(where: TopicWhereInput, orderBy: TopicOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Topic!]
  role: Role!
  state: MembershipState!
}

type MembershipConnection {
  pageInfo: PageInfo!
  edges: [MembershipEdge]!
  aggregate: AggregateMembership!
}

input MembershipCreateInput {
  id: ID
  user: UserCreateOneWithoutMembershipsInput!
  station: StationCreateOneWithoutMembersInput!
  topics: TopicCreateManyWithoutMembershipInput
  role: Role
  state: MembershipState
}

input MembershipCreateManyWithoutStationInput {
  create: [MembershipCreateWithoutStationInput!]
  connect: [MembershipWhereUniqueInput!]
}

input MembershipCreateManyWithoutUserInput {
  create: [MembershipCreateWithoutUserInput!]
  connect: [MembershipWhereUniqueInput!]
}

input MembershipCreateOneWithoutTopicsInput {
  create: MembershipCreateWithoutTopicsInput
  connect: MembershipWhereUniqueInput
}

input MembershipCreateWithoutStationInput {
  id: ID
  user: UserCreateOneWithoutMembershipsInput!
  topics: TopicCreateManyWithoutMembershipInput
  role: Role
  state: MembershipState
}

input MembershipCreateWithoutTopicsInput {
  id: ID
  user: UserCreateOneWithoutMembershipsInput!
  station: StationCreateOneWithoutMembersInput!
  role: Role
  state: MembershipState
}

input MembershipCreateWithoutUserInput {
  id: ID
  station: StationCreateOneWithoutMembersInput!
  topics: TopicCreateManyWithoutMembershipInput
  role: Role
  state: MembershipState
}

type MembershipEdge {
  node: Membership!
  cursor: String!
}

enum MembershipOrderByInput {
  id_ASC
  id_DESC
  role_ASC
  role_DESC
  state_ASC
  state_DESC
}

type MembershipPreviousValues {
  id: ID!
  role: Role!
  state: MembershipState!
}

input MembershipScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  state: MembershipState
  state_not: MembershipState
  state_in: [MembershipState!]
  state_not_in: [MembershipState!]
  AND: [MembershipScalarWhereInput!]
  OR: [MembershipScalarWhereInput!]
  NOT: [MembershipScalarWhereInput!]
}

enum MembershipState {
  PENDING
  ACTIVE
  BANNED
}

type MembershipSubscriptionPayload {
  mutation: MutationType!
  node: Membership
  updatedFields: [String!]
  previousValues: MembershipPreviousValues
}

input MembershipSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MembershipWhereInput
  AND: [MembershipSubscriptionWhereInput!]
  OR: [MembershipSubscriptionWhereInput!]
  NOT: [MembershipSubscriptionWhereInput!]
}

input MembershipUpdateInput {
  user: UserUpdateOneRequiredWithoutMembershipsInput
  station: StationUpdateOneRequiredWithoutMembersInput
  topics: TopicUpdateManyWithoutMembershipInput
  role: Role
  state: MembershipState
}

input MembershipUpdateManyDataInput {
  role: Role
  state: MembershipState
}

input MembershipUpdateManyMutationInput {
  role: Role
  state: MembershipState
}

input MembershipUpdateManyWithoutStationInput {
  create: [MembershipCreateWithoutStationInput!]
  delete: [MembershipWhereUniqueInput!]
  connect: [MembershipWhereUniqueInput!]
  set: [MembershipWhereUniqueInput!]
  disconnect: [MembershipWhereUniqueInput!]
  update: [MembershipUpdateWithWhereUniqueWithoutStationInput!]
  upsert: [MembershipUpsertWithWhereUniqueWithoutStationInput!]
  deleteMany: [MembershipScalarWhereInput!]
  updateMany: [MembershipUpdateManyWithWhereNestedInput!]
}

input MembershipUpdateManyWithoutUserInput {
  create: [MembershipCreateWithoutUserInput!]
  delete: [MembershipWhereUniqueInput!]
  connect: [MembershipWhereUniqueInput!]
  set: [MembershipWhereUniqueInput!]
  disconnect: [MembershipWhereUniqueInput!]
  update: [MembershipUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [MembershipUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [MembershipScalarWhereInput!]
  updateMany: [MembershipUpdateManyWithWhereNestedInput!]
}

input MembershipUpdateManyWithWhereNestedInput {
  where: MembershipScalarWhereInput!
  data: MembershipUpdateManyDataInput!
}

input MembershipUpdateOneRequiredWithoutTopicsInput {
  create: MembershipCreateWithoutTopicsInput
  update: MembershipUpdateWithoutTopicsDataInput
  upsert: MembershipUpsertWithoutTopicsInput
  connect: MembershipWhereUniqueInput
}

input MembershipUpdateWithoutStationDataInput {
  user: UserUpdateOneRequiredWithoutMembershipsInput
  topics: TopicUpdateManyWithoutMembershipInput
  role: Role
  state: MembershipState
}

input MembershipUpdateWithoutTopicsDataInput {
  user: UserUpdateOneRequiredWithoutMembershipsInput
  station: StationUpdateOneRequiredWithoutMembersInput
  role: Role
  state: MembershipState
}

input MembershipUpdateWithoutUserDataInput {
  station: StationUpdateOneRequiredWithoutMembersInput
  topics: TopicUpdateManyWithoutMembershipInput
  role: Role
  state: MembershipState
}

input MembershipUpdateWithWhereUniqueWithoutStationInput {
  where: MembershipWhereUniqueInput!
  data: MembershipUpdateWithoutStationDataInput!
}

input MembershipUpdateWithWhereUniqueWithoutUserInput {
  where: MembershipWhereUniqueInput!
  data: MembershipUpdateWithoutUserDataInput!
}

input MembershipUpsertWithoutTopicsInput {
  update: MembershipUpdateWithoutTopicsDataInput!
  create: MembershipCreateWithoutTopicsInput!
}

input MembershipUpsertWithWhereUniqueWithoutStationInput {
  where: MembershipWhereUniqueInput!
  update: MembershipUpdateWithoutStationDataInput!
  create: MembershipCreateWithoutStationInput!
}

input MembershipUpsertWithWhereUniqueWithoutUserInput {
  where: MembershipWhereUniqueInput!
  update: MembershipUpdateWithoutUserDataInput!
  create: MembershipCreateWithoutUserInput!
}

input MembershipWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  station: StationWhereInput
  topics_every: TopicWhereInput
  topics_some: TopicWhereInput
  topics_none: TopicWhereInput
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  state: MembershipState
  state_not: MembershipState
  state_in: [MembershipState!]
  state_not_in: [MembershipState!]
  AND: [MembershipWhereInput!]
  OR: [MembershipWhereInput!]
  NOT: [MembershipWhereInput!]
}

input MembershipWhereUniqueInput {
  id: ID
}

type Mutation {
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createMembership(data: MembershipCreateInput!): Membership!
  updateMembership(data: MembershipUpdateInput!, where: MembershipWhereUniqueInput!): Membership
  updateManyMemberships(data: MembershipUpdateManyMutationInput!, where: MembershipWhereInput): BatchPayload!
  upsertMembership(where: MembershipWhereUniqueInput!, create: MembershipCreateInput!, update: MembershipUpdateInput!): Membership!
  deleteMembership(where: MembershipWhereUniqueInput!): Membership
  deleteManyMemberships(where: MembershipWhereInput): BatchPayload!
  createStation(data: StationCreateInput!): Station!
  updateStation(data: StationUpdateInput!, where: StationWhereUniqueInput!): Station
  updateManyStations(data: StationUpdateManyMutationInput!, where: StationWhereInput): BatchPayload!
  upsertStation(where: StationWhereUniqueInput!, create: StationCreateInput!, update: StationUpdateInput!): Station!
  deleteStation(where: StationWhereUniqueInput!): Station
  deleteManyStations(where: StationWhereInput): BatchPayload!
  createTopic(data: TopicCreateInput!): Topic!
  updateTopic(data: TopicUpdateInput!, where: TopicWhereUniqueInput!): Topic
  updateManyTopics(data: TopicUpdateManyMutationInput!, where: TopicWhereInput): BatchPayload!
  upsertTopic(where: TopicWhereUniqueInput!, create: TopicCreateInput!, update: TopicUpdateInput!): Topic!
  deleteTopic(where: TopicWhereUniqueInput!): Topic
  deleteManyTopics(where: TopicWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  membership(where: MembershipWhereUniqueInput!): Membership
  memberships(where: MembershipWhereInput, orderBy: MembershipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Membership]!
  membershipsConnection(where: MembershipWhereInput, orderBy: MembershipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MembershipConnection!
  station(where: StationWhereUniqueInput!): Station
  stations(where: StationWhereInput, orderBy: StationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Station]!
  stationsConnection(where: StationWhereInput, orderBy: StationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StationConnection!
  topic(where: TopicWhereUniqueInput!): Topic
  topics(where: TopicWhereInput, orderBy: TopicOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Topic]!
  topicsConnection(where: TopicWhereInput, orderBy: TopicOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TopicConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Role {
  FOUNDER
  ADMIN
  MODERATOR
  MEMBER
}

type Station {
  id: ID!
  name: String!
  identifier: String
  description: String!
  public: Boolean!
  members(where: MembershipWhereInput, orderBy: MembershipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Membership!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type StationConnection {
  pageInfo: PageInfo!
  edges: [StationEdge]!
  aggregate: AggregateStation!
}

input StationCreateInput {
  id: ID
  name: String!
  identifier: String
  description: String!
  public: Boolean
  members: MembershipCreateManyWithoutStationInput
}

input StationCreateOneWithoutMembersInput {
  create: StationCreateWithoutMembersInput
  connect: StationWhereUniqueInput
}

input StationCreateWithoutMembersInput {
  id: ID
  name: String!
  identifier: String
  description: String!
  public: Boolean
}

type StationEdge {
  node: Station!
  cursor: String!
}

enum StationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  identifier_ASC
  identifier_DESC
  description_ASC
  description_DESC
  public_ASC
  public_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StationPreviousValues {
  id: ID!
  name: String!
  identifier: String
  description: String!
  public: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type StationSubscriptionPayload {
  mutation: MutationType!
  node: Station
  updatedFields: [String!]
  previousValues: StationPreviousValues
}

input StationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StationWhereInput
  AND: [StationSubscriptionWhereInput!]
  OR: [StationSubscriptionWhereInput!]
  NOT: [StationSubscriptionWhereInput!]
}

input StationUpdateInput {
  name: String
  identifier: String
  description: String
  public: Boolean
  members: MembershipUpdateManyWithoutStationInput
}

input StationUpdateManyMutationInput {
  name: String
  identifier: String
  description: String
  public: Boolean
}

input StationUpdateOneRequiredWithoutMembersInput {
  create: StationCreateWithoutMembersInput
  update: StationUpdateWithoutMembersDataInput
  upsert: StationUpsertWithoutMembersInput
  connect: StationWhereUniqueInput
}

input StationUpdateWithoutMembersDataInput {
  name: String
  identifier: String
  description: String
  public: Boolean
}

input StationUpsertWithoutMembersInput {
  update: StationUpdateWithoutMembersDataInput!
  create: StationCreateWithoutMembersInput!
}

input StationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  identifier: String
  identifier_not: String
  identifier_in: [String!]
  identifier_not_in: [String!]
  identifier_lt: String
  identifier_lte: String
  identifier_gt: String
  identifier_gte: String
  identifier_contains: String
  identifier_not_contains: String
  identifier_starts_with: String
  identifier_not_starts_with: String
  identifier_ends_with: String
  identifier_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  public: Boolean
  public_not: Boolean
  members_every: MembershipWhereInput
  members_some: MembershipWhereInput
  members_none: MembershipWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [StationWhereInput!]
  OR: [StationWhereInput!]
  NOT: [StationWhereInput!]
}

input StationWhereUniqueInput {
  id: ID
  identifier: String
}

type Subscription {
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  membership(where: MembershipSubscriptionWhereInput): MembershipSubscriptionPayload
  station(where: StationSubscriptionWhereInput): StationSubscriptionPayload
  topic(where: TopicSubscriptionWhereInput): TopicSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Topic {
  id: ID!
  title: String!
  content: String!
  membership: Membership!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TopicConnection {
  pageInfo: PageInfo!
  edges: [TopicEdge]!
  aggregate: AggregateTopic!
}

input TopicCreateInput {
  id: ID
  title: String!
  content: String!
  membership: MembershipCreateOneWithoutTopicsInput!
}

input TopicCreateManyWithoutMembershipInput {
  create: [TopicCreateWithoutMembershipInput!]
  connect: [TopicWhereUniqueInput!]
}

input TopicCreateWithoutMembershipInput {
  id: ID
  title: String!
  content: String!
}

type TopicEdge {
  node: Topic!
  cursor: String!
}

enum TopicOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TopicPreviousValues {
  id: ID!
  title: String!
  content: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input TopicScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TopicScalarWhereInput!]
  OR: [TopicScalarWhereInput!]
  NOT: [TopicScalarWhereInput!]
}

type TopicSubscriptionPayload {
  mutation: MutationType!
  node: Topic
  updatedFields: [String!]
  previousValues: TopicPreviousValues
}

input TopicSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TopicWhereInput
  AND: [TopicSubscriptionWhereInput!]
  OR: [TopicSubscriptionWhereInput!]
  NOT: [TopicSubscriptionWhereInput!]
}

input TopicUpdateInput {
  title: String
  content: String
  membership: MembershipUpdateOneRequiredWithoutTopicsInput
}

input TopicUpdateManyDataInput {
  title: String
  content: String
}

input TopicUpdateManyMutationInput {
  title: String
  content: String
}

input TopicUpdateManyWithoutMembershipInput {
  create: [TopicCreateWithoutMembershipInput!]
  delete: [TopicWhereUniqueInput!]
  connect: [TopicWhereUniqueInput!]
  set: [TopicWhereUniqueInput!]
  disconnect: [TopicWhereUniqueInput!]
  update: [TopicUpdateWithWhereUniqueWithoutMembershipInput!]
  upsert: [TopicUpsertWithWhereUniqueWithoutMembershipInput!]
  deleteMany: [TopicScalarWhereInput!]
  updateMany: [TopicUpdateManyWithWhereNestedInput!]
}

input TopicUpdateManyWithWhereNestedInput {
  where: TopicScalarWhereInput!
  data: TopicUpdateManyDataInput!
}

input TopicUpdateWithoutMembershipDataInput {
  title: String
  content: String
}

input TopicUpdateWithWhereUniqueWithoutMembershipInput {
  where: TopicWhereUniqueInput!
  data: TopicUpdateWithoutMembershipDataInput!
}

input TopicUpsertWithWhereUniqueWithoutMembershipInput {
  where: TopicWhereUniqueInput!
  update: TopicUpdateWithoutMembershipDataInput!
  create: TopicCreateWithoutMembershipInput!
}

input TopicWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  membership: MembershipWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TopicWhereInput!]
  OR: [TopicWhereInput!]
  NOT: [TopicWhereInput!]
}

input TopicWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  identifier: String
  password: String!
  email: String!
  memberships(where: MembershipWhereInput, orderBy: MembershipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Membership!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  identifier: String
  password: String!
  email: String!
  memberships: MembershipCreateManyWithoutUserInput
}

input UserCreateOneWithoutMembershipsInput {
  create: UserCreateWithoutMembershipsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutMembershipsInput {
  id: ID
  name: String!
  identifier: String
  password: String!
  email: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  identifier_ASC
  identifier_DESC
  password_ASC
  password_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  identifier: String
  password: String!
  email: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  identifier: String
  password: String
  email: String
  memberships: MembershipUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  identifier: String
  password: String
  email: String
}

input UserUpdateOneRequiredWithoutMembershipsInput {
  create: UserCreateWithoutMembershipsInput
  update: UserUpdateWithoutMembershipsDataInput
  upsert: UserUpsertWithoutMembershipsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutMembershipsDataInput {
  name: String
  identifier: String
  password: String
  email: String
}

input UserUpsertWithoutMembershipsInput {
  update: UserUpdateWithoutMembershipsDataInput!
  create: UserCreateWithoutMembershipsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  identifier: String
  identifier_not: String
  identifier_in: [String!]
  identifier_not_in: [String!]
  identifier_lt: String
  identifier_lte: String
  identifier_gt: String
  identifier_gte: String
  identifier_contains: String
  identifier_not_contains: String
  identifier_starts_with: String
  identifier_not_starts_with: String
  identifier_ends_with: String
  identifier_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  memberships_every: MembershipWhereInput
  memberships_some: MembershipWhereInput
  memberships_none: MembershipWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  identifier: String
  email: String
}
`