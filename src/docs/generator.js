import docs from 'express-mongoose-docs'

export default (_app, mongoose) => {
  // Load docs
  const app = {
    ..._app,
    routes: {
      get: [
        { path: '/blog/comments', method: 'GET' },
        { path: '/blog/comments/:commentId', method: 'GET' },
        { path: '/blog/comments/create', method: 'POST' },
        { path: '/todos', method: 'GET' },
        { path: '/todos/:todoId', method: 'GET' },
        { path: '/todos/create', method: 'POST' },
      ],
    },
  }
  docs(app, mongoose)
}
