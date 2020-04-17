const express = require('express');
const router = express.Router();

// *******ROUTES********

// First rout "/"
router.get('/', (req, res) => { 
    // res.end('Server created with Express');
    res.render('index.ejs');
});
// Login rout
router.get('/login', (req, res) => {
    // res.end('LOGIN PAGE');
    res.render('login.ejs');
});

// // Request to routes doesn't exist
// router.get('*', (req, res) => { 
//     res.end('NOT FOUND');
// });

// Exports the module to can use in others moduls
module.exports = router;