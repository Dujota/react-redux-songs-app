import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SongDetail = ({ selectedSong }) => {
  console.log(selectedSong);
  if (!selectedSong) {
    return <div>Please Select a Song</div>;
  }

  const { title, duration, artist } = selectedSong;
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta">
          <span>{artist}</span>
        </div>
        <p>Duration: {duration}</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ selectedSong }) => ({ selectedSong });

SongDetail.propTypes = {
  selectedSong: PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
    duration: PropTypes.string,
  }),
};

export default connect(mapStateToProps)(SongDetail);
