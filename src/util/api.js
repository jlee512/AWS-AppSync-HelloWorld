import Amplify, {API, graphqlOperation} from 'aws-amplify';
import aws_config from '../aws-exports'

import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';

Amplify.configure(aws_config);

let subscription_list = [];

const listEvents = async () => {
  var events = await API.graphql(graphqlOperation(queries.listEvents));
  console.log(events);
}

const createEvent = async () => {
  // Replace with function parameter
  var event = {
    name: "Test",
    when: "Test",
    where: "Test",
    description: "Test"
  }

  var new_event = await API.graphql(graphqlOperation(mutations.createEvent, event));
  console.log(new_event);
}

const createComment = async () => {
  // Replace with function parameter
  var comment = {
    eventId: "03e0ce30-48e5-48e3-89f0-087926a782e0",
    content: "Test Comment",
    createdAt: "Now"
  }

  var new_comment = await API.graphql(graphqlOperation(mutations.commentOnEvent, comment));
  console.log(new_comment);
}

const subscribeToAll = async () => {
  console.log('Subscribing');
  subscription_list.push(await API.graphql(graphqlOperation(subscriptions.subscribeToEventComments, {eventId: '03e0ce30-48e5-48e3-89f0-087926a782e0'})
  ).subscribe({
    next: data => {
      console.log('Created');
      console.log(data);
    },
    error: error => {
      console.error(error);
    }
  }));

  subscription_list.push(await API.graphql(graphqlOperation(subscriptions.subscribeToEventCreation)
  ).subscribe({
    next: data => {
      console.log('Created');
      console.log(data);
    },
    error: error => {
      console.error(error);
    }
  }));
}

const unsubscribeToAll = () => {
  console.log('Unsubscribing');
  subscription_list.forEach(subscription => {
    subscription.unsubscribe();
  });
}

export {listEvents, createEvent, createComment, subscribeToAll, unsubscribeToAll};
