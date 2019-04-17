import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    console.log(this.props);
    return <div>SongList</div>;
  }
}
/* By convention we call this mapStateToProps, this is required in order to get the state from redux into our component from the connect function -- data from redux will show up as props in our component

 ***** gets called with all the state inside redux store && it must return an object with the state we want in the component
* */
const mapStateToProps = ({ songs }) => {
  console.log(songs);
  return { songs };
};

/* We implement the connect component here using closures
it accepts the map state to props as the 1st function argument and the component to receive the state as the second argument */
export default connect(mapStateToProps)(SongList);
