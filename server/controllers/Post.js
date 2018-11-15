module.exports = {
  create: async (req, res) => {
    try {
      const db = req.app.get('db')
  
      let { title, content } = req.body;
      let { id: user_id } = req.session.user
  
      let posts = await db.createPost({ user_id, title, content })

      res.send(posts)
    } catch (error) {
      console.log('error creating post:', error)
      res.status(500).send(error)
    }
  },

  read: async (req, res) => {
    try {
      const db = req.app.get('db')

      let posts = await db.getPosts()
      res.send(posts)
    } catch (error) {
      console.log('error fetching posts:', error)
      res.status(500).send(error)
    }
  },

  update: async (req, res) => {
    try {
      const db = req.app.get('db')
      let { id } = req.params
      let { title, content } = req.body

      let posts = await db.updatePost([id, title, content])

      res.send(posts)
    } catch (error) {
      console.log('error updating post:', error)
      res.status(500).send(error)
    }
  },

  delete: async (req, res) => {
    try {
      const db = req.app.get('db')
      let { id } = req.params

      let posts = await db.deletePost(id)
      res.send(posts)
    } catch (error) {
      console.log('error deleting post:', error)
      res.status(500).send(error)
    }
  },

  getPost: async (req, res) => {
    try {
      const db = req.app.get('db')
      let { id } = req.params
      let postResponse = await db.getPost(id)
      let post = postResponse[0]

      res.send(post)
    } catch (error) {
      console.log('error fethcing post:', error)
      res.status(500).send(error)
    }
  }

}