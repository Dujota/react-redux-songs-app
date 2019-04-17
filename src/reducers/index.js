// import the combine reducers so we cna create a state object from all the reducer functions
import { combineReducers } from 'redux';

const songsReducer = () => [
  { title: 'Zoom Zoom', artist: 'Polo & Pan', duration: '4:05' },
  { title: 'Trauma', artist: "N'TO", duration: '7:02' },
  { title: 'Salzburg', artist: 'Worakls', duration: '8:45' },
  { title: 'Hortari', artist: 'Worakls', duration: '6:16' },
];

// default null becuase when the app first fires up it should be with no selected song
const selectedSongReducer = (selectedSong = null, action) => {
  const { type, payload } = action;

  // this allows us to expand our code with future actions and types
  if (type === 'SONG_SELECTED') {
    return payload;
  }

  return selectedSong;
};

// finally export defualt here so that all the files can have access to combined reducers method and the code herein
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
