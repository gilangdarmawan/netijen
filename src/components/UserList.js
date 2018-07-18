import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        member: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const member = res.data;
                this.setState({
                    member
                });
            })
    }

    render() {
        return (
            <div className="row mx-0 mt-4 justify-content-center">
                { this.state.member.map(user =>
                    <div className="col-lg-4 col-md-6 mb-1 p-2 text-center" key={user.id}>
                        <div className="border border-success p-3 h-100">
                            <h5>
                                {user.name}
                            </h5>
                            <p>
                                @{user.username}
                            </p>
                            <p>
                                <small className="text-muted">
                                    {user.address.street} {user.address.suite}, {user.address.city}
                                    <br/>Lat : {user.address.geo.lat} Long : {user.address.geo.lng}
                                </small>
                            </p>
                            <div className="row mx-0 mt-4">
                                <div className="col-6">
                                    <Link className="btn btn-block btn-outline-danger btn-sm" to={{
                                        pathname: `/postlist/${user.id}`,
                                        state: { member: user.id }
                                    }}>
                                    <i className="fa fa-pencil fa-fw"></i>&nbsp;View Post
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link className="btn btn-block btn-outline-danger btn-sm" to={{
                                        pathname: `/list-album/${user.id}`,
                                        state: { member: user.id }
                                    }}>
                                    <i className="fa fa-picture-o fa-fw"></i>&nbsp;View Album
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}