import React from 'react'
import "./Post.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublishIcon from '@mui/icons-material/Publish';

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
      <div className="post__body">
        <div className="post__header">
          <div className='post__headerText'>
            <h3>
              Abdur Rahmaan <span>
                <VerifiedIcon className='post__badge' /> @abdurtech
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.</p>
          </div>
        </div>
        <img src="https://media.giphy.com/media/3Fox4sRv6aRS9bCggt/giphy.gif" alt=''/>
      <div className='post__footer'>
        <ChatBubbleIcon fontSize='small' />
        <RepeatIcon fontSize='small' />
        <FavoriteIcon fontSize='small' />
        <PublishIcon fontSize='small' />
      </div>
      </div>
    </div>
  )
}

export default Post
