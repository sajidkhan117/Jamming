import React from 'react'

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const AllComponent = () => {
  return (
    <div>
         <h1>Jammming</h1>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  )
}

export default AllComponent