import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SongList extends React.Component {
  static propTypes = {
    songs: PropTypes.array,
  };

  render() {
    // Console logging the props object wlll show the songs arary (state) and also the dispatch(action) fucntion is referenced in props
    console.log(this.props);

    const { songs } = this.props;
    return (
      <div>
        {songs.map(song => (
          <div className="item" key={song.title}>
            <div className="right floated content">
              <button type="button" className="ui button primary">
                Select
              </button>
            </div>
            <div className="content">{song.title}</div>
          </div>
        ))}
        ;
      </div>
    );
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
