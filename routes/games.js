const express = require('express');
const router = express.Router();
const db = require('../db');

// Game submission endpoint
router.post('/', (req, res) => {
    const { drawTime, currency, transactionID } = req.body;
    
    // Validate input
    if (!drawTime || !currency || !transactionID) {
        return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const query = 'INSERT INTO games (draw_time, currency, transaction_id) VALUES (?, ?, ?)';
    db.query(query, [drawTime, currency, transactionID], (err, result) => {
        if (err) {
            console.error('Error inserting game:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Game submitted successfully' });
    });
});

module.exports = router;
