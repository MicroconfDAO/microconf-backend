module.exports = function(app, db) {
  app.post('/login', (req, res) => {
    console.log(req.body);
    //todo search user
    res.send('1')
  });

  app.post('/register', (req, res) => {
    console.log(req.body);
    const user = { login: req.body.login };
    //todo add user (check sso, add by login)

    /*
    db.collection('users').insert(user, (err, result) => {
        if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else {
          res.send(result.ops[0]);
    }});
    */
    res.send('1')
  });
};