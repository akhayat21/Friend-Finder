var friendsArr = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsArr);
  });

  app.post("/api/friends", function(req, res) {
    var scores = [];
    for (i = 0; i < friendsArr.length; i++) {
      var temp = 0;
      for (j = 0; j < 10; j++) {
       temp += Math.abs(parseInt(friendsArr[i].scores[j])-parseInt(req.body.scores[j]));
      }
      scores.push(parseInt(temp));
    }
    var match = scores.indexOf(Math.min(...scores));
    res.json({
      name: friendsArr[match].name,
      photo: friendsArr[match].photo
    });
    friendsArr.push(req.body);
  });
};
