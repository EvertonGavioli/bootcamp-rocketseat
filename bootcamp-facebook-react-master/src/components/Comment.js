import React from 'react';
import propTypes from 'prop-types';

function Comment({ data }) {
  return (
    <li className="comments">
      <img src={data.author.avatar} alt="avatar" />
      <p>
        <strong>{data.author.name}</strong>
        {data.content}
      </p>
    </li>
  );
}

Comment.propTypes = {
  data: propTypes.object.isRequired,
}

export default Comment;