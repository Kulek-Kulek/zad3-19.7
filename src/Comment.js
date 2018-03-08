import React from 'react';
import thumbUp from './images/thumbUp.png';
import thumbDown from './images/thumbDown.jpg';



const Comment = ({text, votesUp, votesDown, id, thumbUpComment, thumbDownComment, removeComment}) =>
  <li className='list'>
	<button className='delete' onClick={() => removeComment(id)}>DELETE</button>
    {text} <span className='up'> {votesUp}</span> <img className='emoticon' src={thumbUp} onClick={() => thumbUpComment(id)}/>
    <span className='down'> {votesDown}</span> <img className='emoticon' src={thumbDown} onClick={() => thumbDownComment(id)}/>
    
  </li>;

export default Comment;
