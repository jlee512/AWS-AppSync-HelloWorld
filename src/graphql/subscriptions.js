// eslint-disable
// this is an auto generated file. This will be overwritten

export const subscribeToEventComments = `subscription SubscribeToEventComments($eventId: String!) {
  subscribeToEventComments(eventId: $eventId) {
    eventId
    commentId
    content
    createdAt
  }
}
`;
export const subscribeToEventCreation = `subscription SubscribeToEventCreation {
  subscribeToEventCreation {
    id
    name
    where
    when
    description
    comments {
      nextToken
    }
  }
}
`;
