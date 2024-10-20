import React, { useState } from 'react';


const AddNewPost = () => {
  const [postContent, setPostContent] = useState('');

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = () => {
    
    console.log('New Post:', postContent);
  };

  return (
    <div className="add-new-post">
      <textarea
        value={postContent}
        onChange={handlePostChange}
        placeholder="Write your post here..."
      />
      <button onClick={handlePostSubmit} className="submit-post-btn">
       Post
      </button>
    </div>
  );
};

export default AddNewPost;
