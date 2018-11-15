import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { setPosts } from '../redux/reducer'
import Posts from './Posts'
import Post from './Post'

class PostsWrapper extends Component {
  componentDidMount() {
    axios.get('/api/posts').then(response => {
      this.props.setPosts(response.data)
    })
  }

  render() {
    return (
      <Switch>
        <Route path="/" component={Posts} exact />
        <Route path="/posts" component={Posts} exact />
        <Route path="/posts/:id" component={Post} />
      </Switch>
    )
  }
}


export default connect(null, { setPosts })(PostsWrapper)