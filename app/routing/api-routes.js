// handles incoming survey results

var friendsData = require('../data/friends.js')
var toCompare = [];

  // API GET Requests to get answers

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friendsData);
  });

  for (var i = 0; i< friendsData.length; i++) {
    toCompare = friendsData[i];
    console.log([i] + " = " + toCompare.name);
  }

//push array of answers to friends 
  app.post('/api/friends', function (req, res) {
    friendsData.push(req.body);
    res.json(true);
    
    for (var i = 0; i< friendsData.length; i++) {
      toCompare = friendsData[i];
      console.log([i] + " = " + toCompare.name);
    }
  });    
};