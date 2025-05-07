import React from 'react'
import "./Post.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Post(
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar
) {
  return (
    <div className="post">
      <div className='post__avatar'>
        <AccountCircleIcon />
      </div>
    </div>
  )
}

export default Post
