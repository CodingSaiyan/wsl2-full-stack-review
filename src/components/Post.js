import React, { Component } from 'react';
import axios from 'axios'

class Post extends Component {
  constructor() {
    super()
    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    let { id } = this.props.match.params
    axios.get(`/api/posts/${id}`).then(response => {
      this.setState({
        post: response.data
      })
    })
  }

  render() {
    let { id, title, author, content } = this.state.post
    return (
      <div>
        <h1>{title}</h1>
        <p>{author}</p>
        <p>{content}</p>
      </div>
    )
  }
}

export default Post