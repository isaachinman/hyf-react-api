export default (error, docs, res) => {
  if (!docs) {
    res.status(404).send({ error: 'Document(s) not found.' })
  } else if (!error) {
    res.status(200).send(docs)
  } else {
    res.status(400).send({ error: error.message })
  }
}
