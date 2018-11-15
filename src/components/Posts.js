import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostForm from './PostForm'
import axios from 'axios'

import { setPosts } from '../redux/reducer'

function Posts(props) {
  return (
    <div>
      {props.isAuthenticated && <PostForm />}
      {props.posts.map(post => {
        return (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h1>{post.title}</h1>
              <p>{post.author}</p>
            </Link>
            {+props.user.id === +post.user_id && <div>
              <button>update</button>
              <button onClick={() => {
                axios.delete(`/api/posts/${post.id}`).then(response => {
                  props.setPosts(response.data)
                })
              }}>delete</button>
            </div>}
          </div>
        )
      })}
    </div>
  )
}

function mapStateToProps(state) {
  let { posts, isAuthenticated, user } = state
  return {
    posts,
    isAuthenticated,
    user
  }
}

export default connect(mapStateToProps, { setPosts })(Posts)
