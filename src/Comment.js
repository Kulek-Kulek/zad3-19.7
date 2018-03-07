import React from 'react';

const Comment = ({text, votesUp, votesDown, id, thumbUpComment, thumbDownComment}) =>
  <li className='list'>
	
    {text} <span className='up'> {votesUp}</span> <button onClick={() => thumbUpComment(id)}>UP</button>
    <span className='down'> {votesDown}</span> <button onClick={() => thumbDownComment(id)}>DOWN</button>
  </li>;

export default Comment;
