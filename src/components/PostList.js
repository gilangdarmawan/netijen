import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import WriteComment from './WriteComment';
import CommentList from './CommentList';

export default class PostList extends React.Component {
    state = {
        activeMember:[]
    }

    componentDidMount() {
        const postId = this.props.location.state.member;

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${postId}`)
            .then(res => {
                const activeMember = res.data;
                this.setState({
                    activeMember
                });
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row mx-0 flex-column mt-4">
                    <div className="h2">List of post</div>
                    <div className="mt-2">
                        <Link to="/" className="btn btn-outline-secondary"><i className="fa fa-caret-left fa-fw"></i> Back</Link>
                    </div>
                </div>
                <div className="row mx-0 mt-3">
                    { this.state.activeMember.map(user =>
                        <div className="border border-success mb-3 p-3 w-100" key={user.id}>
                            <div className="h4">
                                {user.title}
                            </div>
                            <div className="small mb-2">
                                Posted by : {user.userId}
                            </div>
                            <p className="font-italic">
                                "{user.body}"
                            </p>
                            {/* <WriteComment getComment={this.getComment}/> */}
                            <CommentList getPost={user.id}/>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}