const express = require('express');
const router = express.Router();
const passport = require('passport');
const scope = require('../config/scopes')
router.get('/google',passport.authenticate('google',{scope : ['https://www.googleapis.com/auth/admin.directory.customer.readonly',scope.userCircle,scope.userEmail,scope.userInfo,scope.userProfile] }));
router.get('/google/callback',(req,res) => {
  res.send('ghjk');
  console.log(req.profile);
})
module.exports = router;