import React from 'react';
import AddNewPost from './AddNewPost';
import NewsfeedPost from './NewsFeedPost';
import NewsfeedPost2 from './NewsFeedPost2';

function MainContent() {
  return (
    <div className="main-content">
    <AddNewPost/>
       <NewsfeedPost/>
       <NewsfeedPost2/>
       <NewsfeedPost2/>
      

     
    </div>
  );
}

export default MainContent;
