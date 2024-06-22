const { connectToDb } = require('./db');

async function retrievePlayers() {
  try {
    const connection = await connectToDb();
    const players = await connection.execute('SELECT * FROM players');
    console.log(players);
  } catch (error) {
    console.error('Error retrieving players:', error);
  }
}

retrievePlayers();