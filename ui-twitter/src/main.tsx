import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'

import twitterLogo from './assets/logo-twitter.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from '@phosphor-icons/react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='sidebar'>
        <img src={twitterLogo} alt="Logo" className='logo' />

        <nav className='main-navigation'>
          <a href="#" className='active'>
            <House weight='fill'/>
            Home
          </a>
          <a href="#">
            <Hash />
            Explore
          </a>
          <a href="#">
            <Bell />
            Notifications
          </a>
          <a href="#">
            <Envelope />
            Messages
          </a>
          <a href="#">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="#">
            <FileText />
            Lists
          </a>
          <a href="#">
            <User />
            Profile
          </a>
          <a href="#">
            <DotsThreeCircle />
            More
          </a>
        </nav>

        <button className='new-tweet' type='button'>Tweet</button>
      </aside>
      <div className="content">Content</div>
    </div>
  </React.StrictMode>,
)
