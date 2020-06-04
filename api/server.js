const express = require('express');
const server = express();
const hubsRouter = require('../hubs/hubs-router')
server.use(express.json());
server.use('/api/hubs', hubsRouter)

server.get('/', (req, res) => {
  const query = req.query;
  console.log('query', query) 
  //should be empty object because there is no query right now.
  //to get key:value pairs do something like this:
  //localhost:5000(base url)?(the question mark signifies 
  //the beginning of the query)limit=5  ...the = means the : in
  //a key:value pair
  //  =======    localhost:5000?limit=5 ===========
  // ===== query should return  {limit:'5'}
  //
  //
  // ===!!!!!!!!!!   ALL things returned WILL BE PARSED or returned
  //as a string so if you need a number...you'll have to turn it
  //into a number   ===========!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  res.status(200).json(query);
});


module.exports = server;


//for get requests we have to manipulate the url by adding queries
// localhost:5000/api/hubs?limit=3&sortdir=desc&sortby=name&page=2
//interpreted:
//base url: localhost:5000
//endpoint: /api/hubs
//beginning of query: ?
//key:value pairs directing what info the client wants seperated by
// &
//info sent back to user as object:
//{limit:'3', sortdir(sort direction): 'desc'(descending), 
//sortby:'name', page:'2'}