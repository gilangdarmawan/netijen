import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import PostList from './PostList';
import AlbumList from './AlbumList';
import PhotoList from './PhotoList';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/postlist/:id" component={PostList} />
            <Route path="/list-album/:id" component={AlbumList} />
            <Route path="/list-photo/:id" component={PhotoList} />
        </Switch>
    </BrowserRouter>
)

export default Router;