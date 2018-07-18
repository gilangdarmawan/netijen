import React from 'react';
import axios from 'axios';

export default class CommentList extends React.Component {
    state = {
        comment:[]
    }

    componentDidMount() {
        const commentId = this.props.getPost;
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`)
            .then(res => {
                const comment = res.data;
                this.setState({
                    comment
                });
            })
    }

    render() {
        return(
            <div className="row mx-0">
                <div className="h6">
                    Comment :
                </div>
                { this.state.comment.map(comment =>
                    <div className="border-bottom mb-1 p-2 w-100" key={comment.id}>
                        <div className="h6">
                            {comment.email}
                        </div>
                        <div className="small font-italic">
                            "{comment.body}""
                        </div>
                    </div>
                )}
            </div>
        )
    }

}