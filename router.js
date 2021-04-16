const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ a: 1, ba: 2 })
})

router.get('/student', (req, res) => {
    res.send('student')
})

module.exports = router;