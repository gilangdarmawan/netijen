import React from 'react';

const WriteComment = props => (
//   <form onSubmit={props.WriteComment}>
//     <input className="form__input" type="text" name="commentId" />
//     <button className="form__button">Search</button>
//   </form>
    <button onClick={props.WriteComment} className="btn btn-outline-danger btn-sm">View Comment(s)</button>
);

export default WriteComment;