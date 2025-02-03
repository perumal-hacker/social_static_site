import React from 'react'
import {Link} from 'react-router-dom'
const Nav = ({search, setSearch}) => {
  return (
    <nav className="Nav">
      <form 
        onSubmit={(e) => e.preventDefault()} 
        className="searchForm">
        <label htmlFor="search" className="search-label">Search Posts</label>
        <input 
          id="search"
          type="text"
          placeholder='Search Posts'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          
        />
      </form>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="About" >About</Link></li>
        <li><Link to="/mypost/1" >Post</Link></li>
        <li><Link to="/NewPost">New Post</Link></li>
      </ul>
    </nav>
  );
}


export default Nav