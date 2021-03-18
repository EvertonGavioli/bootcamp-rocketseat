import React from 'react';
import propTypes from 'prop-types';

import Comment from './Comment';

function Post({ data }) {
  return (
    <li className="post">
      <div>
        <img src={data.author.avatar} alt="avatar" />
        <div className="post-perfil">
          <strong>{data.author.name}</strong>
          <span>{data.date}</span>
        </div>
      </div>
      <p>{data.content}</p>
      <hr />

      <ul>
        {data.comments.map(comment =>
          <Comment key={comment.id} data={comment} />
        )}
      </ul>
    </li>
  );
}

Post.propTypes = {
  data: propTypes.object.isRequired,
}

export default Post;
