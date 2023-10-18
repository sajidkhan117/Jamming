import React from 'react'

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import MuiPract from './MuiPract';

const AllComponent = () => {
  return (
    <div>
         <h1>Jammming</h1>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults />
        <Playlist />
      </div>

      <MuiPract/>
    </div>
  )
}

export default AllComponent