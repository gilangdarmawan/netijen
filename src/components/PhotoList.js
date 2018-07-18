import React from 'react';
import axios from 'axios';

export default class PhotoList extends React.Component {
    state = {
        selectedPhoto:[]
    }

    componentDidMount() {
        const albumId = this.props.location.state.album;

        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(res => {
                const selectedPhoto = res.data;
                this.setState({
                    selectedPhoto
                });
            })
    }

    render () {
        return (
            <div className="container">
                <div className="row mt-4 mx-0 flex-column">
                    <div className="h2">List of photo(s)</div>
                </div>
                <div className="row mx-0 mt-3 justify-content-center">
                    { this.state.selectedPhoto.map(photo =>
                        <div className="col-lg-3 col-md-4 col-6 mb-1 p-2 text-center" key={photo.id}>
                            <div className="border border-success h-100">                            
                                <img className="img-fluid" src={photo.url} alt={photo.title}/>
                                <div className="h6 font-italic font-weight-normal m-2">
                                    "{photo.title}"
                                </div>
                                <div className="small m-2">
                                photo id : {photo.id} in {photo.albumId}'s album
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}