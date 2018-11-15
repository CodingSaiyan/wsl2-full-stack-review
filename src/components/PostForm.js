import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setPosts } from '../redux/reducer'

class PostForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      content: ''
    }
  }

  handleChange = e => {
    let { name, value } = e.target;

    this.setState({
      [name]: value 
    })
  }

  handleClick = () => {
    axios.post('/api/posts', this.state).then(response => {
      this.props.setPosts(response.data)
      this.setState({
        title: '',
        content: ''
      })
    })
  }

  render() {
    return (
      <div>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="title"/>
        <textarea name="content" cols="30" rows="10" value={this.state.content} onChange={this.handleChange}></textarea>
        <button onClick={this.handleClick}>submit</button>
      </div>
    )
  }
}

export default connect(null, { setPosts })(PostForm)