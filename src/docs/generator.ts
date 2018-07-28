import docs = require('express-mongoose-docs')

export default (app, mongoose) => {
  // Load docs
  const modifiedApp = {
    ...app,

    // Have to manually specify routes because the package above is terrible
    // https://github.com/nabeel-ahmad/express-mongoose-docs/issues/9

    routes: {
      get: [
        { path: '/blog/comments', method: 'GET' },
        { path: '/blog/comments/:commentId', method: 'GET' },
        { path: '/blog/comments/create', method: 'POST' },
        { path: '/blog/comments/:commentId', method: 'PATCH' },
        { path: '/blog/comments/:commentId', method: 'DELETE' },
        { path: '/todos', method: 'GET' },
        { path: '/todos/:todoId', method: 'GET' },
        { path: '/todos/create', method: 'POST' },
        { path: '/todos/:todoId', method: 'PATCH' },
        { path: '/todos/:todoId', method: 'DELETE' },
      ],
    },

  }
  docs(modifiedApp, mongoose)
}
