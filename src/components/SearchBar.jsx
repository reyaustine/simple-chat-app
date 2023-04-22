import React from 'react'

const SearchBar = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search users here'/>
      </div>
      <div className="userChat">
      <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <div className="userChatInfo">
          <span>Kaisha</span>
        </div>
      </div>
    </div>
  )
}

export default SearchBar