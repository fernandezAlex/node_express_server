const express = require('express');
const router = express.Router();

// app.get('/404', function(req, res, next){
//     // trigger a 404 since no other middleware
//     // will match /404 after this one, and we're not
//     // responding here
//     res.end('NOT FOUND');
//     next();
//   });

// Request to routes doesn't exist
router.get('*', (req, res) => { 
    res.end('NOT FOUND');
});

module.exports = router;