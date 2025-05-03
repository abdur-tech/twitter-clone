import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ForumIcon from '@mui/icons-material/Forum';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Person2Icon from '@mui/icons-material/Person2';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
function Sidebar() {
  return (
    <div className='sidebar'>
        {/* Twitter icon */}
        <TwitterIcon />

        <SidebarOption active Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={ExploreIcon} text="Explore" />
        <SidebarOption Icon={NotificationsIcon} text="Notifications" />
        <SidebarOption Icon={ForumIcon} text="Messages" />
        <SidebarOption Icon={BookmarksIcon} text="Bookmarks" />
        <SidebarOption Icon={FormatListBulletedIcon} text="Lists" />
        <SidebarOption Icon={Person2Icon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />


        {/* Button -> Tweet */}
        <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
      
    </div>
  )
}

export default Sidebar
