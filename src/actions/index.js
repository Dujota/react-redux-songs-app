// Action Creator

// export the function itself rather than the file
export const selectSong = song =>
  // Return an action
  ({
    type: 'SONG_SELECTED',
    payload: song,
  });
