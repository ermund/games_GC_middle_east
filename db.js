const mysql = require('mysql2/promise');

// Replace these values with your own database credentials
const host = 'localhost';
const user = 'root';
const password = '';
const database = 'game_db';

const dbConfig = {
  host: host,
  user: user,
  password: password,
  database: database
};

async function connectToDb() {
  try 
  {
    ('mysql2/game_db');

  } catch (error) {
    console.error('Error connecting to game_db:', error);
  }
}