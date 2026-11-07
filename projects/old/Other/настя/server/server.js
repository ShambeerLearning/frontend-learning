const express = require("express");
const {Pool} = require("pg");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const serverPort = 3000;

app.listen(serverPort, () => {
  console.log(`Server started at http://localhost:${serverPort}`);
});

const data = {
  database:"rent",
  password: "admin", 
  port: 5432,
  host: "localhost", 
  user: "postgres"
};

const pool = new Pool(data);

pool.connect((err) =>{
  if(err){
    console.log(`Failed to connect to database`, err.stack);
  }
  else{
    console.log(`Successfull connection to database!`);
  }
});

app.get('/api/partners', async(req, res) =>{
  console.log('Getting information from database');

  try{
    const queryText = 
      `SELECT 
        id, 
        name, 
        type, 
        rating, 
        address, 
        phone_number, 
        email, 
        director_name
      FROM partners
      ORDER BY id`;
      const result = await pool.query(queryText);
      console.log(`Got ${result.rowCount}`)

      return res.status(200).json({
        success:true, 
        data: result.rows
      });
  }catch(error){
    console.error(`Failes SQL operation: `, error.message)
    return res.status(500).json({
      success: false, 
      error: `Database failed`,
      details: error.message
    });
  }
});

app.get("/api/partners/:id", async(req, res) =>{
  const {id} = req.params;
  try{
    const result = await pool.query(
      `SELECT id, name, type, address, phone_number, email, director_name
      FROM partners 
      WHERE id = $1`, 
      [id]
    )
    if(result.rowCount === 0){
      return res.status(404).json({error: "Partner not found"}); 
    }
    res.status(200).json(result.rows[0]);
  }catch(err){
    console.error("Error fetching partner: ", error);
    res.status(500).json({error: "Database error"});
  }
});

app.post("/postPartner", async(req, res) =>{
  try{
    const {name, type, address, rating, email, phone_number, director_name} = req.body;
    const result = await pool.query(
      `INSERT INTO partners (name, type, address, rating, email, phone_number, director_name)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, 
      [name, type, address, rating, email, phone_number, director_name]
    );
    res.status(201).json(result.rows);
  }catch(error){
    console.log(`Failed to add partner: ${error.stack}`);
    res.status(500).json({error:error});
  }
});

app.delete("/api/partners/:id", async(req,res) =>{
  try{
    const{id} = req.params;
    const result = await pool.query(
      `DELETE FROM partners WHERE id =$1 RETURNING *`, [id]
    );
    if(result.rowCount === 0){
      return res.status(404).json({error: 'Partner not found'});
    }
    res.json({
      message: 'Partner deleted successfully!',
      deletedPartner: result.rows[0]
    });
  }catch(err){
    console.error(err);
    res.status(500).json({error: 'Database error'});
  }
});

app.put("/api/partners/:id", async(req, res)=>{
  try{
    const {id} = req.params;
    const {name, type, address, rating, email, phone_number, director_name} = req.body;

    const result = await pool.query(
      `UPDATE partners 
      SET name = $1, type = $2, address = $3, rating = $4, email = $5, phone_number = $6, director_name = $7
      WHERE id = $8
      RETURNING *`, [name, type, address, rating, email, phone_number, director_name, id]
    );
    if(result.rowCount === 0){
      return res.status(404).json({error: 'Partner wasnt found'})
    }
    res.json({
      message: "Partner info successfully changed!",
      partner: result.rows[0]
    });
  }catch(error){
    console.error("Error updating information: ", error.stack);
    res.status(500).json({error:"DB error"});
  }
})