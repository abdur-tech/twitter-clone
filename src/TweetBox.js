import React from 'react'
import './TweetBox.css'
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
        <AccountCircleIcon className='icon'/>
        <input placeholder="What's happening" type='text'></input>
        </div>
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
