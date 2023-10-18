// Track.js
import React from 'react';

function Track(props) {
  const { track } = props;

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <button className="Track-action">+ Add to Playlist</button>
    </div>
  );
}

export default Track;
