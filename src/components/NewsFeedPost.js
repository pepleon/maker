import React from 'react';
import './NewsfeedPost.css';

const heartIcon = 'https://purepng.com/public/uploads/large/heart-icon-y1k.png';
const commentIcon = 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg';
const favouriteIcon = 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg';




function NewsfeedPost() {
  return (
    <div className="newsfeed-post">
      <header className="newsfeed-header">
        <h2>NEWSFEED</h2>
      </header>
      <div className="post-section">
        <div className="user-info">
          <img src={favouriteIcon} alt="Profile" className="profile" />
          <div className="text-info">
            <p><strong>Yoel Adamson-Brown</strong></p>
            <p>Activity happened on 4th Dec 2023</p>
            <p>First posted at: 16:13 on 11th December 2023</p>
            <p>Last edited at: 16:13 on 11th Dec 2023</p>
            <p><a href="#">stories-spreadsheet-import-at-10-43-on-11th-december-2023</a></p>
          </div>
        </div>
        <div className="update-text">
          <p>"New update by Yoel Adamson-Brown working on the Using football to teach life skills to children for An Organisation Demo with Sofia"</p>
        </div>
        <div className="expand-section">
          <img src={heartIcon} alt="Heart" className="small-icon" />
          <button className="expand-story">Expand Story</button>
          <div className="footer-text">
            <span>0 Comments</span>
            <span>0 Favourites</span>
          </div>
        </div>
      </div>
      <footer className="post-footer">
        <div className="comment-box">
            <img src={favouriteIcon} className='profilecomment'/>
          <input type="text" placeholder="Write a comment..."  className='comment'/>
          <button className="post-button">Post</button>
        </div>
      </footer>
    </div>
  );
}

export default NewsfeedPost;
