import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectSong } from '../actions';

class SongList extends React.Component {
  static propTypes = {
    songs: PropTypes.array,
  };

  render() {
    // Console logging the props object wlll show the songs arary (state) and also the dispatch(action) fucntion is referenced in props
    console.log(this.props);

    const { songs, selectSong } = this.props;
    return (
      <div className="ui divided list">
        {songs.map(song => (
          <div className="item" key={song.title}>
            <div className="right floated content">
              <button
                onClick={() => {
                  // We make an onClick that gets the action creator from the props object and then in this case, it takes in the current song we are itireating from the array
                  selectSong(song);
                }}
                type="button"
                className="ui button primary"
              >
                Select
              </button>
            </div>
            <div className="content">{song.title}</div>
          </div>
        ))}
      </div>
    );
  }
}
/* By convention we call this mapStateToProps, this is required in order to get the state from redux into our component from the connect function -- data from redux will show up as props in our component

 ***** gets called with all the state inside redux store && it must return an object with the state we want in the component
* */
const mapStateToProps = state => {
  console.log(state);
  const { songs } = state;
  return { songs };
};

/* We implement the connect component here using closures

Connect(mapStateToProps, {actions})
  - it accepts the map state to props as the 1st argument
  - accpets an object of action creators as the second argument

  *IMPORTANT - it will pass the actions to the component in the props object **

  - We dont actually call the actions inside the render directly

  (ComponentToReceiveState)
  - Second argument will be the component that recives the data
*/
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
