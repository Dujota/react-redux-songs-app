import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    return <div>SongList</div>;
  }
}

// we implement the connect component here using closures
export default connect()(SongList);
