export default {
  port: process.env.PORT || 8080,
  bodyLimit: '50kb',
  dbURI: process.env.MONGODB_URI,
}
