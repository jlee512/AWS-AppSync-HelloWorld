import React, { Component } from 'react';
import { Grommet, Button } from 'grommet';
import { Edit, List, Connectivity, Cut } from 'grommet-icons';
var api = require('./util/api');

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '20px',
      height: '20px',
    },
  },
};

class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <header className="App-header">
          <Button
            icon={<Edit />}
            label="Create Test Event"
            onClick={() => { api.createEvent(); }}
          />
          <Button
            icon={<Edit />}
            label="Create Test Comment"
            onClick={() => { api.createComment(); }}
          />
          <Button
            icon={<List />}
            label="List Events"
            onClick={() => { api.listEvents(); }}
          />
          <Button
            icon={<Connectivity />}
            label="Subscribe to all"
            onClick={() => { api.subscribeToAll(); }}
          />
          <Button
            icon={<Cut />}
            label="Unsubscribe to all"
            onClick={() => { api.unsubscribeToAll(); }}
          />

        </header>
      </Grommet>
    );
  }
}

export default App;
