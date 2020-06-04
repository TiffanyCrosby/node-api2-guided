const server = require('./api/server');

server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

