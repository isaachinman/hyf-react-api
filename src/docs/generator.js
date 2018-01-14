import docs from 'express-mongoose-docs'

export default (_app, mongoose) => {
  // Load docs
  const app = {
    ..._app,

    // Have to manually specify routes because the package above is terrible
    // https://github.com/nabeel-ahmad/express-mongoose-docs/issues/9

    routes: {
      get: [
        { path: '/blog/comments', method: 'GET' },
        { path: '/blog/comments/:commentId', method: 'GET' },
        { path: '/blog/comments/create', method: 'POST' },
        { path: '/blog/comments/:commentId', method: 'PUT' },
        { path: '/todos', method: 'GET' },
        { path: '/todos/:todoId', method: 'GET' },
        { path: '/todos/create', method: 'POST' },
        { path: '/todos/:todoId', method: 'PUT' },
      ],
    },

  }
  docs(app, mongoose)
}
