import React from 'react';
import SongList from './SongList';

// All state will be on the redux store so we can have a simple app component
const App = () => (
  // add a semantic ui grid to the app
  <div className="ui container grid">
    <div className="ui row">
      <div className="column eight wide">
        <SongList />
      </div>
    </div>
  </div>
);
export default App;
