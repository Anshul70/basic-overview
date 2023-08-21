const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // Import the cors package
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'MyDatabase',
  password: 'anshul',
  port: 5432,
});

app.get('/api/data', async (req, res) => {
  console.log("sdfdsfdsf");
  try {
    const result = await pool.query('SELECT * FROM "ST_Table"');
    res.send(result.rows);
    console.log("result ", result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal server error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port1 ${port}`);
});
